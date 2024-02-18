sketchy_topbar --add item line right \
	--set line icon="" \
	icon.color=0xff9fd06a \
	icon.font="MonaspiceRn Nerd Font Propo:Regular:14.8" \
	\
	--add item playing right \
	--set playing update_freq=5 \
	icon.color=0xff9fd06a \
	label.font="MonaspiceRn Nerd Font Propo:Bold Italic:12.0" \
	label.padding_right=5 \
	label.color=$COLOR_TWO \
	script="$PLUGIN_DIR/playing.sh" \
	label.y_offset=-1 \
	background.padding_right=3 \
	icon.font="MonaspiceRn Nerd Font Propo:Regular:14.8"
