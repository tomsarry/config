#!/bin/sh

# A script to add the weather to i3status

i3status | (read line && echo "$line" && read line && echo "$line" && read line && echo "$line" && while :
do
  read line
  status=$(cat ~/.weather.cache)
  echo ",[{\"full_text\":\"${status}\"},${line#,\[}" || exit 1
done)
