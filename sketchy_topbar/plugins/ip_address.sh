#!/bin/sh

source "$HOME/.config/colors.sh"
source "$HOME/.config/icons.sh"

IP_ADDRESS=$(/System/Library/PrivateFrameworks/Apple80211.framework/Resources/airport -I | awk -F ' SSID: '  '/ SSID: / {print $2}')
IS_VPN=$(scutil --nwi | grep -m1 'utun' | awk '{ print $1 }')

if [[ $IS_VPN != "" ]]; then
	COLOR=$X_BROWN
	ICON=$ICON_VPN
	LABEL="VPN"
elif [[ $IP_ADDRESS != "" ]]; then
	COLOR=$X_BROWN
	ICON=$ICON_WIFI
	LABEL=$IP_ADDRESS
else
	COLOR=$X_BROWN_DULL
	ICON=$ICON_WIFI_OFF
	LABEL="Not Connected"
fi

sketchy_topbar --set $NAME background.color=$COLOR \
	icon=$ICON \
	label="$LABEL"
