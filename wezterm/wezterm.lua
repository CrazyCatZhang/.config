local wezterm = require("wezterm")

-- local launch_menu = {}
-- local default_shell = "/bin/zsh"
local padding = {
	left = "0",
	right = "0",
	top = "0",
	bottom = "0",
}

local SOLID_RIGHT_ARROW = utf8.char(0xe0b0)
local dimmer = { brightness = 0.1 }
local Grey = "#0f1419"
local LightGrey = "#191f26"

local TAB_BAR_BG = "#1F2029"
local ACTIVE_TAB_BG = "#F4A889"
local ACTIVE_TAB_FG = "Black"
local HOVER_TAB_BG = Grey
local HOVER_TAB_FG = "White"
local NORMAL_TAB_BG = LightGrey
local NORMAL_TAB_FG = "White"

wezterm.on("format-tab-title", function(tab, tabs, panes, config, hover, max_width)
	panes = panes
	config = config
	max_width = max_width

	local background = NORMAL_TAB_BG
	local foreground = NORMAL_TAB_FG

	local is_first = tab.tab_id == tabs[1].tab_id
	local is_last = tab.tab_id == tabs[#tabs].tab_id

	if tab.is_active then
		background = ACTIVE_TAB_BG
		foreground = ACTIVE_TAB_FG
	elseif hover then
		background = HOVER_TAB_BG
		foreground = HOVER_TAB_FG
	end

	local leading_fg = NORMAL_TAB_FG
	local leading_bg = background

	local trailing_fg = background
	local trailing_bg = NORMAL_TAB_BG

	if is_first then
		leading_fg = TAB_BAR_BG
	else
		leading_fg = NORMAL_TAB_BG
	end

	if is_last then
		trailing_bg = TAB_BAR_BG
	else
		trailing_bg = NORMAL_TAB_BG
	end

	local title = tab.active_pane.title
	-- broken?
	-- local title = " " .. wezterm.truncate_to_width(tab.active_pane.title, 30) .. " "

	return {
		{ Attribute = { Italic = true } },
		{ Attribute = { Intensity = hover and "Bold" or "Normal" } },
		{ Background = { Color = leading_bg } },
		{ Foreground = { Color = leading_fg } },
		{ Text = SOLID_RIGHT_ARROW },
		{ Background = { Color = background } },
		{ Foreground = { Color = foreground } },
		{ Text = " " .. title .. " " },
		{ Background = { Color = trailing_bg } },
		{ Foreground = { Color = trailing_fg } },
		{ Text = SOLID_RIGHT_ARROW },
	}
end)

-- Reload the configuration every ten minutes
wezterm.time.call_after(600, function()
	wezterm.reload_configuration()
end)

-- A helper function for my fallback fonts
local function font_with_fallback(name, params)
	local names = { name, "MonaspiceRn Nerd Font Propo", "mini-file-icons", "Hack Nerd Font", "SauceCodePro Nerd Font" }
	return wezterm.font_with_fallback(names, params)
end

local function get_theme()
	local _time = os.date("*t")
	if _time.hour >= 1 and _time.hour < 9 then
		return "Rosé Pine (base16)"
	elseif _time.hour >= 9 and _time.hour < 17 then
		return "tokyonight_night"
	elseif _time.hour >= 17 and _time.hour < 21 then
		return "Catppuccin Mocha"
	elseif _time.hour >= 21 and _time.hour < 24 or _time.hour >= 0 and _time.hour < 1 then
		return "kanagawabones"
	end
end

return {
	bidi_enabled = true,
	bidi_direction = "LeftToRight",
	color_scheme = get_theme(),
	font = font_with_fallback({
		family = "MonaspiceRn Nerd Font Propo",
		harfbuzz_features = {
			"zero",
		},
	}),
	font_rules = {
		{
			intensity = "Bold",
			font = font_with_fallback({
				family = "MonaspiceRn Nerd Font Propo",
				harfbuzz_features = {
					"zero",
				},
				weight = "Bold",
			}),
		},
		{
			italic = true,
			intensity = "Bold",
			font = font_with_fallback({
				family = "MonaspiceRn Nerd Font Propo",
				-- family = "Dank Mono",
				weight = "Bold",
				italic = true,
			}),
		},
		{
			italic = true,
			font = font_with_fallback({
				-- family = "Dank Mono",
				family = "MonaspiceRn Nerd Font Propo",
				weight = "Regular",
				italic = true,
			}),
		},
	},

	keys = {
		{
			key = "1",
			mods = "CMD",
			action = wezterm.action.Multiple({
				wezterm.action.SendKey({ key = "Home" }),
				wezterm.action.SendKey({ key = "1" }),
			}),
		},
		{
			key = "2",
			mods = "CMD",
			action = wezterm.action.Multiple({
				wezterm.action.SendKey({ key = "Home" }),
				wezterm.action.SendKey({ key = "2" }),
			}),
		},
		{
			key = "3",
			mods = "CMD",
			action = wezterm.action.Multiple({
				wezterm.action.SendKey({ key = "Home" }),
				wezterm.action.SendKey({ key = "3" }),
			}),
		},
		{
			key = "4",
			mods = "CMD",
			action = wezterm.action.Multiple({
				wezterm.action.SendKey({ key = "Home" }),
				wezterm.action.SendKey({ key = "4" }),
			}),
		},
		{
			key = "5",
			mods = "CMD",
			action = wezterm.action.Multiple({
				wezterm.action.SendKey({ key = "Home" }),
				wezterm.action.SendKey({ key = "5" }),
			}),
		},
		{
			key = "6",
			mods = "CMD",
			action = wezterm.action.Multiple({
				wezterm.action.SendKey({ key = "Home" }),
				wezterm.action.SendKey({ key = "6" }),
			}),
		},
		{
			key = "7",
			mods = "CMD",
			action = wezterm.action.Multiple({
				wezterm.action.SendKey({ key = "Home" }),
				wezterm.action.SendKey({ key = "7" }),
			}),
		},
	},

	colors = {
		tab_bar = {
			background = TAB_BAR_BG,
		},
	},

	tab_bar_style = {
		new_tab = wezterm.format({
			{ Background = { Color = HOVER_TAB_BG } },
			{ Foreground = { Color = TAB_BAR_BG } },
			{ Text = SOLID_RIGHT_ARROW },
			{ Background = { Color = HOVER_TAB_BG } },
			{ Foreground = { Color = HOVER_TAB_FG } },
			{ Text = " + " },
			{ Background = { Color = TAB_BAR_BG } },
			{ Foreground = { Color = HOVER_TAB_BG } },
			{ Text = SOLID_RIGHT_ARROW },
		}),
		new_tab_hover = wezterm.format({
			{ Attribute = { Italic = true } },
			{ Attribute = { Intensity = "Bold" } },
			{ Background = { Color = NORMAL_TAB_BG } },
			{ Foreground = { Color = TAB_BAR_BG } },
			{ Text = SOLID_RIGHT_ARROW },
			{ Background = { Color = NORMAL_TAB_BG } },
			{ Foreground = { Color = NORMAL_TAB_FG } },
			{ Text = " + " },
			{ Background = { Color = TAB_BAR_BG } },
			{ Foreground = { Color = NORMAL_TAB_BG } },
			{ Text = SOLID_RIGHT_ARROW },
		}),
	},

	initial_cols = 128,
	initial_rows = 32,
	use_dead_keys = false,
	window_padding = padding,
	window_decorations = "RESIZE",
	hide_tab_bar_if_only_one_tab = true,
	selection_word_boundary = " \t\n{}[]()\"'`,;:@",
	-- disable_default_key_bindings = true,
	line_height = 1.25,
	font_size = 16,
	window_background_opacity = 0.95,
	bold_brightens_ansi_colors = false,
	-- swap_backspace_and_delete = false,
	use_fancy_tab_bar = false,
	tab_bar_at_bottom = true,
	show_tab_index_in_tab_bar = false,
	scrollback_lines = 30000,
	-- term = "wezterm",
	-- freetype_load_target = "Light",
	window_close_confirmation = "NeverPrompt",
	native_macos_fullscreen_mode = false,
	hide_mouse_cursor_when_typing = true,
	pane_focus_follows_mouse = true,
	enable_tab_bar = true,
}
