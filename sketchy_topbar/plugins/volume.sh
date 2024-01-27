#!/bin/bash

WIDTH=100

volume_change() {
	source "$CONFIG_DIR/icons.sh"
	case $INFO in
	[6-9][0-9] | 100)
		ICON=$VOLUME_100
		;;
	[3-5][0-9])
		ICON=$VOLUME_66
		;;
	[1-2][0-9])
		ICON=$VOLUME_33
		;;
	[1-9])
		ICON=$VOLUME_10
		;;
	0)
		ICON=$VOLUME_0
		;;
	*) ICON=$VOLUME_100 ;;
	esac

	sketchy_topbar --set volume_icon label=$ICON \
		--set $NAME slider.percentage=$INFO

	INITIAL_WIDTH="$(sketchy_topbar --query $NAME | jq -r ".slider.width")"

	# Check if INITIAL_WIDTH is empty or not an integer
	if [[ -z "$INITIAL_WIDTH" || ! "$INITIAL_WIDTH" =~ ^[0-9]+$ ]]; then
		INITIAL_WIDTH=0
	fi

	if [ "$INITIAL_WIDTH" -eq "0" ]; then
		sketchy_topbar --animate tanh 30 --set $NAME slider.width=$WIDTH
	fi

	sleep 2

	# Check wether the volume was changed another time while sleeping
	FINAL_PERCENTAGE="$(sketchy_topbar --query $NAME | jq -r ".slider.percentage")"
	if [ "$FINAL_PERCENTAGE" -eq "$INFO" ]; then
		sketchy_topbar --animate tanh 30 --set $NAME slider.width=0
	fi
}

mouse_clicked() {
	osascript -e "set volume output volume $PERCENTAGE"
}

case "$SENDER" in
"volume_change")
	volume_change
	;;
"mouse.clicked")
	mouse_clicked
	;;
esac
