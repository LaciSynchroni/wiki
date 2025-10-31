# Backups
:::info Backups may exist
Some of the deployments already have a built-in backup solution. Check for the existance of the ``pgbackups`` section
in your composefile!
:::
Generally, good backups follow the 3-2-1 rule: Three copies of data, on two different storage media with one off-site backup. If you
want to follow that rule is entirely up to you. 

We do, however, recommend at least doing regular, **local backups** of your postgres database. This allows you to restore
all user data in the event of a data loss in case you messed with the database in the wrong way.

In the future, we will also outline suggestions for advanced backup strategies

## Simple Local Backups
For local backups we recommend using the ``postgres-backup-local`` docker image. It runs as a container inside your Laci
docker deployment, and will regularly create postgres dumpfiles of your database and store them on your local file system.

Simply add this snippet to your composefile if it's not present yet, then restart your deployment. The first backup will
start right away, and you will notice a backup structure in your file system in the ``pg-backups`` directory.

The data is stored in pg_dumps binary format, and can be restored with [pg_restore](https://www.postgresql.org/docs/current/app-pgrestore.html)

```yaml
  pgbackups:
    image: docker.io/prodrigestivill/postgres-backup-local:18
    restart: unless-stopped
    volumes:
      - ./pg-backups:/backups
    links:
      - postgres
    depends_on:
      - postgres
    environment:
      POSTGRES_HOST: postgres
      POSTGRES_DB: "${LACI_POSTGRES_DB}"
      POSTGRES_USER: "${LACI_POSTGRES_USER}"
      POSTGRES_PASSWORD: "${LACI_POSTGRES_PASSWORD}"
      POSTGRES_EXTRA_OPTS: "--format=custom"
      SCHEDULE: "@daily"
      BACKUP_ON_START: "TRUE"
      BACKUP_KEEP_DAYS: 30
      BACKUP_KEEP_WEEKS: 4
      BACKUP_KEEP_MONTHS: 6
      HEALTHCHECK_PORT: 8080
```

## Saving your backups
It might be wise to regularly archive and download your postgres backups, .env configuration and server config json files into a tidy archive you can
use to restore your laci instance in case of a loss of your virtual machine.

Independent of your setup, you will want to backup these files and directories:
- the entire ``pg-backups`` directory, since pg database is small enough to just always zip that up
- the ``.env`` file for your local config
- All the mounted ``.appsettings.json``

Make sure to **password protect your archive**!

It's probably fine to just do that every month or two, manually, and then storing these files somewhere safe and secure.

## Automating Backups
If you want to actually follow the 3-2-1 rule, it's recommended you get yourself familiar with automated backup solutions. Here are some recommendations:

1. Use a backup manager like [restic](https://restic.net/) to automate your backup process on your local machine in a local repository
   1. (Optional) you can add the [backrest web UI](https://github.com/garethgeorge/backrest) to your composefile to easier manager your restic instance
2. Enable VM snapshots with your hosting provider. A rotation of daily snapshots is recommended. Most hosters should allow you to do a variation of daily, weekly and monthly snapshots to keep.
3. Configure a remote storage in restic: Restic allows you to create repositories that connect to offsite backup solutions like Backblaze, Google Cloud or AWS S3.
