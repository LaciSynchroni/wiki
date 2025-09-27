# 4 - Enabling Admin Access
## Fresh Install
If you have a fresh instance, you can use this bash script to create a new admin account based on a discord ID. You can then use
that admin account to /useradd yourself a Laci account with the bot!
```bash
# Call ./create-admin-account.sh <discord-id> <admin-uid>
# For example ./create-admin-account.sh 1235432342 nia_admin
# The second parameter can be omitted, and will default to just "admin"

if [ -z "$1" ]; then
    echo "No discord ID provided, please provide the discord ID of the admin users"
    read -r DISCORD_ID
else
  DISCORD_ID=$1
fi

if [ -z "$2" ]; then
  ADMIN_UID="admin"
else
  ADMIN_UID=$2
fi

echo "Creating admin account $ADMIN_UID for $DISCORD_ID"

# This assumes that there is a container named "postgres" running.
CONTAINER_ID=$(docker ps --format "{{.ID}}" --filter name="postgres")
if [ -z "$CONTAINER_ID" ]; then
    echo "Postgres container not found, aborting. Please verify that your Laci instance is running"
else
 docker exec -i "$CONTAINER_ID" psql --user laci <<EOF
  insert into users(uid, is_moderator, is_admin, last_logged_in) values ('$ADMIN_UID', true, true, current_timestamp);
  insert into lodestone_auth (discord_id, user_uid) values ($DISCORD_ID, '$ADMIN_UID');
EOF
fi
```

## Existing install
If you want to grant access to an existing account, please follow these steps. **If the user registered through the bot, you only need to execute steps 1, 2 and 6!**
1. ``docker compose -f <location of your composefile> exec postgres /bin/bash`` to exec yourself into the container
2. ``psql --user laci`` now opens the SQL shell
3. ``select * from users;`` now shows you all registered users. Find the ``uid`` of the user you want to give admin permissions and remember it
4. ``select * from lodestone_auth where user_uid = '<insert-user-id>';`` tells you if there is a user already.
5. (Only if there is no entry in ``lodestone_auth``): ``insert into lodestone_auth (discord_id, user_uid) values (<your-discord-id>, '<your-uid>');``. This assocites the Laci account with a discord account.
6. ``update users set is_admin = true, is_moderator=true where uid = '<your-uid>';`` to enable admin functionality.