Vim�UnDo� ���OӶ���E����7�������r�bf                                     e���    _�                             ����                                                                                                                                                                                                                                                                                                                                                             e��     �                   �               5��                                                5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e��     �                  �                  local M = {     "ThePrimeagen/harpoon",     event = "VeryLazy",     dependencies = {        { "nvim-lua/plenary.nvim" },     },   }       function M.config()     local keymap = vim.keymap.set   0  local opts = { noremap = true, silent = true }       W  keymap("n", "<s-m>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)   V  keymap("n", "<TAB>", "<cmd>lua require('harpoon.ui').toggle_quick_menu()<cr>", opts)   /  vim.api.nvim_create_autocmd({ "filetype" }, {       pattern = "harpoon",       callback = function()   >      vim.cmd [[highlight link HarpoonBorder TelescopeBorder]]   &      -- vim.cmd [[setlocal nonumber]]   :      -- vim.cmd [[highlight HarpoonWindow guibg=#313132]]       end,     })   end       function M.mark_file()   $  require("harpoon.mark").add_file()      vim.notify "󱡅  marked file"   end       return M5��                                       �      �                          �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e��    �               	"ThePrimeagen/harpoon",   	event = "VeryLazy",   	dependencies = {   		{ "nvim-lua/plenary.nvim" },   	},   }       function M.config()   	local keymap = vim.keymap.set   /	local opts = { noremap = true, silent = true }       V	keymap("n", "<s-m>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)   U	keymap("n", "<TAB>", "<cmd>lua require('harpoon.ui').toggle_quick_menu()<cr>", opts)   .	vim.api.nvim_create_autocmd({ "filetype" }, {   		pattern = "harpoon",   		callback = function()   ;			vim.cmd [[highlight link HarpoonBorder TelescopeBorder]]   #			-- vim.cmd [[setlocal nonumber]]   7			-- vim.cmd [[highlight HarpoonWindow guibg=#313132]]   		end,   	})   end       function M.mark_file()   #	require("harpoon.mark").add_file()   	vim.notify "󱡅  marked file"5��                    !          �      �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e��"     �                5�5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e��#     �                5�5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e��#     �                5�5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e��#     �                5�5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             e��#     �                5�5�_�                 	           ����                                                                                                                                                                                                                                                                                                                                                             e��$     �                5�5�_�   	                       ����                                                                                                                                                                                                                                                                                                                                                 v        e��3     �               W  keymap("n", "<s-m>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)5��                        �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v        e��5     �                  �                  local M = {     "ThePrimeagen/harpoon",     event = "VeryLazy",     dependencies = {        { "nvim-lua/plenary.nvim" },     },   }       function M.config()     local keymap = vim.keymap.set   0  local opts = { noremap = true, silent = true }       W  keymap("n", "<s-x>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)   V  keymap("n", "<TAB>", "<cmd>lua require('harpoon.ui').toggle_quick_menu()<cr>", opts)   /  vim.api.nvim_create_autocmd({ "filetype" }, {       pattern = "harpoon",       callback = function()   ?      vim.cmd([[highlight link HarpoonBorder TelescopeBorder]])   &      -- vim.cmd [[setlocal nonumber]]   :      -- vim.cmd [[highlight HarpoonWindow guibg=#313132]]       end,     })   end       function M.mark_file()   $  require("harpoon.mark").add_file()   !  vim.notify("󱡅  marked file")   end       return M5��                                       �      �                          �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v        e��5    �               	"ThePrimeagen/harpoon",   	event = "VeryLazy",   	dependencies = {   		{ "nvim-lua/plenary.nvim" },   	},   }       function M.config()   	local keymap = vim.keymap.set   /	local opts = { noremap = true, silent = true }       V	keymap("n", "<s-x>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)   U	keymap("n", "<TAB>", "<cmd>lua require('harpoon.ui').toggle_quick_menu()<cr>", opts)   .	vim.api.nvim_create_autocmd({ "filetype" }, {   		pattern = "harpoon",   		callback = function()   <			vim.cmd([[highlight link HarpoonBorder TelescopeBorder]])   #			-- vim.cmd [[setlocal nonumber]]   7			-- vim.cmd [[highlight HarpoonWindow guibg=#313132]]   		end,   	})   end       function M.mark_file()   #	require("harpoon.mark").add_file()    	vim.notify("󱡅  marked file")5��                              �      �      5�_�                          ����                                                                                                                                                                                                                                                                                                                                                v       e���     �                  �                  local M = {     "ThePrimeagen/harpoon",     event = "VeryLazy",     dependencies = {        { "nvim-lua/plenary.nvim" },     },   }       function M.config()     local keymap = vim.keymap.set   0  local opts = { noremap = true, silent = true }       W  keymap("n", "<s-x>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)   V  keymap("n", "<TAB>", "<cmd>lua require('harpoon.ui').toggle_quick_menu()<cr>", opts)   /  vim.api.nvim_create_autocmd({ "filetype" }, {       pattern = "harpoon",       callback = function()   ?      vim.cmd([[highlight link HarpoonBorder TelescopeBorder]])   &      -- vim.cmd [[setlocal nonumber]]   :      -- vim.cmd [[highlight HarpoonWindow guibg=#313132]]       end,     })   end       function M.mark_file()   $  require("harpoon.mark").add_file()   !  vim.notify("󱡅  marked file")   end       return M5��                                       �      �                          �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                v       e���    �               	"ThePrimeagen/harpoon",   	event = "VeryLazy",   	dependencies = {   		{ "nvim-lua/plenary.nvim" },   	},   }       function M.config()   	local keymap = vim.keymap.set   /	local opts = { noremap = true, silent = true }       V	keymap("n", "<s-x>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)   U	keymap("n", "<TAB>", "<cmd>lua require('harpoon.ui').toggle_quick_menu()<cr>", opts)   .	vim.api.nvim_create_autocmd({ "filetype" }, {   		pattern = "harpoon",   		callback = function()   <			vim.cmd([[highlight link HarpoonBorder TelescopeBorder]])   #			-- vim.cmd [[setlocal nonumber]]   7			-- vim.cmd [[highlight HarpoonWindow guibg=#313132]]   		end,   	})   end       function M.mark_file()   #	require("harpoon.mark").add_file()    	vim.notify("󱡅  marked file")5��                              �      �      5�_�                          ����                                                                                                                                                                                                                                                                                                                                                v       e���     �               R  keymap("n", "", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)5��                         �                      5�_�                          ����                                                                                                                                                                                                                                                                                                                                                             e���     �   
            /  local opts = { nremap = true, silent = true }5��    
                     �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             e���     �   
            /  local opts = { nremap = true, silent = true }5��    
                     �                      5�_�   	       
                 ����                                                                                                                                                                                                                                                                                                                                                 v        e��-     �               Ukeymap("n", "<s-m>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)5��                          �                      5�_�   	             
           ����                                                                                                                                                                                                                                                                                                                                                             e��$     �               V keymap("n", "<s-m>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)5��                          �                      5�_�   
                          ����                                                                                                                                                                                                                                                                                                                                                             e��%     �               Ukeymap("n", "<s-m>", "<cmd>lua require('user.extras.harpoon').mark_file()<cr>", opts)5��                          �                      5��