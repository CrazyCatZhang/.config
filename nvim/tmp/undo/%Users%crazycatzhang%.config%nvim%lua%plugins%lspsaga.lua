Vim�UnDo� ���z��Բ<��F����	���{<5A�8�U   E   <    keymap.set("n", "<leader>o", "<cmd>Lspsaga outline<cr>")            *       *   *   *    e�Η    _�                             ����                                                                                                                                                                                                                                                                                                                                                             e���     �                   �               5��                    J                      _      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e���    �      @   K   H     'nvimdev/lspsaga.nvim',     config = function()       local keymap = vim.keymap           require('lspsaga').setup {         ui = {           border = 'rounded',         },         lightbulb = {           enable = false,         },       }       B    keymap.set('n', '[d', '<cmd>Lspsaga diagnostic_jump_prev<cr>')   B    keymap.set('n', ']d', '<cmd>Lspsaga diagnostic_jump_next<cr>')   <    keymap.set('n', '<leader>o', '<cmd>Lspsaga outline<cr>')       /    local builtin = require 'telescope.builtin'       .    vim.api.nvim_create_autocmd('LspAttach', {   ?      group = vim.api.nvim_create_augroup('UserLspConfig', {}),         callback = function(ev)   4        -- Enable completion triggered by <c-x><c-o>   :        vim.bo[ev.buf].omnifunc = 'v:lua.vim.lsp.omnifunc'       (        local opts = { buffer = ev.buf }   K        vim.keymap.set('n', 'gd', '<cmd>Lspsaga goto_definition<cr>', opts)   A        vim.keymap.set('n', '<space>r', vim.lsp.buf.rename, opts)           vim.keymap.set(             { 'n', 'v' },             '<space>ca',   )          '<cmd>Lspsaga code_action<cr>',             opts   	        )   ?        vim.keymap.set('n', 'gr', builtin.lsp_references, opts)   
      end,       })           vim.keymap.set(   
      'n',         '<space>k',   #      '<cmd>Lspsaga hover_doc<cr>',         { silent = true }       )           -- error lens       vim.fn.sign_define {         {   %        name = 'DiagnosticSignError',           text = '',   '        texthl = 'DiagnosticSignError',           linehl = 'ErrorLine',         },         {   $        name = 'DiagnosticSignWarn',           text = '',   &        texthl = 'DiagnosticSignWarn',           linehl = 'WarningLine',         },         {   $        name = 'DiagnosticSignInfo',           text = '',   &        texthl = 'DiagnosticSignInfo',           linehl = 'InfoLine',         },         {   $        name = 'DiagnosticSignHint',           text = '',   &        texthl = 'DiagnosticSignHint',           linehl = 'HintLine',         },       }5��          G      =             K      �      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             e��[    �         A      <    keymap.set("n", "<leader>o", "<cmd>Lspsaga outline<cr>")5��                        �                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                      A          V   
    e���     �                   �               �              A   return {     "nvimdev/lspsaga.nvim",     config = function()       local keymap = vim.keymap           require("lspsaga").setup({         ui = {           border = "rounded",         },         lightbulb = {           enable = false,         },       })       B    keymap.set("n", "[d", "<cmd>Lspsaga diagnostic_jump_prev<cr>")   B    keymap.set("n", "]d", "<cmd>Lspsaga diagnostic_jump_next<cr>")   <    keymap.set("n", "<leader>O", "<cmd>Lspsaga outline<cr>")       0    local builtin = require("telescope.builtin")       .    vim.api.nvim_create_autocmd("LspAttach", {   ?      group = vim.api.nvim_create_augroup("UserLspConfig", {}),         callback = function(ev)   4        -- Enable completion triggered by <c-x><c-o>   :        vim.bo[ev.buf].omnifunc = "v:lua.vim.lsp.omnifunc"       (        local opts = { buffer = ev.buf }   K        vim.keymap.set("n", "gd", "<cmd>Lspsaga goto_definition<cr>", opts)   A        vim.keymap.set("n", "<space>r", vim.lsp.buf.rename, opts)   W        vim.keymap.set({ "n", "v" }, "<space>ca", "<cmd>Lspsaga code_action<cr>", opts)   ?        vim.keymap.set("n", "gr", builtin.lsp_references, opts)   
      end,       })       T    vim.keymap.set("n", "<space>k", "<cmd>Lspsaga hover_doc<cr>", { silent = true })           -- error lens       vim.fn.sign_define({         {   %        name = "DiagnosticSignError",           text = "",   '        texthl = "DiagnosticSignError",           linehl = "ErrorLine",         },         {   $        name = "DiagnosticSignWarn",           text = "",   &        texthl = "DiagnosticSignWarn",           linehl = "WarningLine",         },         {   $        name = "DiagnosticSignInfo",           text = "",   &        texthl = "DiagnosticSignInfo",           linehl = "InfoLine",         },         {   $        name = "DiagnosticSignHint",           text = "",   &        texthl = "DiagnosticSignHint",           linehl = "HintLine",         },       })     end,   }5��            A                                   �                    
                             5�_�                       )    ����                                                                                                                                                                                                                                                                                                                                       
          V   
    e���     �         
      5        'nvim-treesitter/nvim-treesitter' -- optional5��       )                  �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                       
          V   
    e���    �       
   
   	   require('lazy').setup({       'nvimdev/lspsaga.nvim',       config = function()   $        require('lspsaga').setup({})       end,       dependencies = {   6        'nvim-treesitter/nvim-treesitter', -- optional   5        'nvim-tree/nvim-web-devicons'     -- optional       }5��                              �       �       5�_�                            ����                                                                                                                                                                                                                                                                                                                                      	          V       e���     �                  dependencies = {   2    "nvim-treesitter/nvim-treesitter", -- optional   .    "nvim-tree/nvim-web-devicons", -- optional     },5��                          p       z               5�_�      	                     ����                                                                                                                                                                                                                                                                                                                                                V       e���     �               	�             �             5��                          2                      �                         3               z       5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                V       e���    �               	  dependencies = {5��                          2                      5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                V       e���    �                 5��                          �                      5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                 v       e��     �          
      require("lazy").setup({5��                                                5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                 v       e��    �   	              })5��    	                     �                      5�_�                    	        ����                                                                                                                                                                                                                                                                                                                                                             e��     �   	            	�   	      
    5��    	                      �                      �    	                     �                      5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             e��     �   	            	fuck,5��    	                     �                      5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             e��     �   	   
          	fuck5��    	                      �                      5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             e��     �   	              }5��    	                     �                      �    
                      �                      �                          �                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             e��!   	 �   	              }    �   
                   �                 te5��                         �                      �                          �                      �    
                      �                      �    	                     �                      �    	                     �                      5�_�                   
       ����                                                                                                                                                                                                                                                                                                                                                             e��u    �   	              })5��    	                     �                      5�_�                          ����                                                                                                                                                                                                                                                                                                                                       
           V        e�Ʌ     �      -         			�   	   
       �      
       �      
   
           require("lspsaga").setup({})5��                        �                      �                          �                      �                         �                     �                  #      �               5      5�_�                    #       ����                                                                                                                                                                                                                                                                                                                                       /           V        e�ɒ     �   "   $   /      				exec = "<CR>",5��    "                 
   7             
       5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                       /           V        e�ɣ    �      .   /   %   #			use_saga_diagnostic_sign = true,   			error_sign = "",   			warn_sign = "",   			hint_sign = "",   			infor_sign = "",   $			dianostic_header_icon = "   ",   			code_action_icon = " ",   			code_action_prompt = {   				enable = true,   				sign = true,   				sign_priority = 20,   				virtual_text = true,   			},   $			finder_definition_icon = "  ",   #			finder_reference_icon = "  ",   			max_preview_lines = 10,   			finder_action_keys = {   				open = "o",   				vsplit = "s",   				split = "i",   				quit = "q",   				scroll_down = "<C-f>",   				scroll_up = "<C-b>",   			},   			code_action_keys = {   				quit = "q",   				exec = "<leader>ca",   			},   			rename_action_keys = {   				quit = "<C-c>",   				exec = "<CR>",   			},   %			definition_preview_icon = "  ",   			border_style = "single",    			rename_prompt_prefix = "➤",   			server_filetype_map = {},   		})5��           $      $      �       A      �      5�_�                       
    ����                                                                                                                                                                                                                                                                                                                                                             e���    �      	   /          require("lspsaga").setup({5�5�_�                    	       ����                                                                                                                                                                                                                                                                                                                            ,          	          V       e���     �      	       $   &      use_saga_diagnostic_sign = true,         error_sign = "",         warn_sign = "",         hint_sign = "",         infor_sign = "",   '      dianostic_header_icon = "   ",          code_action_icon = " ",         code_action_prompt = {           enable = true,           sign = true,           sign_priority = 20,           virtual_text = true,         },   '      finder_definition_icon = "  ",   &      finder_reference_icon = "  ",         max_preview_lines = 10,         finder_action_keys = {           open = "o",           vsplit = "s",           split = "i",           quit = "q",           scroll_down = "<C-f>",           scroll_up = "<C-b>",         },         code_action_keys = {           quit = "q",           exec = "<leader>ca",         },         rename_action_keys = {           quit = "<C-c>",           exec = "<CR>",         },   (      definition_preview_icon = "  ",         border_style = "single",   #      rename_prompt_prefix = "➤",         server_filetype_map = {},5��           $               �       �              5�_�                     	       ����                                                                                                                                                                                                                                                                                                                            	          	          V       e���    �      	             require("lspsaga").setup({       })5��                       �                     5�_�      !                       ����                                                                                                                                                                                                                                                                                                                                      	          V       e��#     �      O       �               �                  config = function()        require("lspsaga").setup({})     end,5��                          �       >               �                   H       �               9      5�_�       *           !           ����                                                                                                                                                                                                                                                                                                                                       N          V       e��$    �      D   O   G   config = function()       local keymap = vim.keymap           require('lspsaga').setup {         ui = {           border = 'rounded',         },         lightbulb = {           enable = false,         },       }       B    keymap.set('n', '[d', '<cmd>Lspsaga diagnostic_jump_prev<cr>')   B    keymap.set('n', ']d', '<cmd>Lspsaga diagnostic_jump_next<cr>')   <    keymap.set('n', '<leader>o', '<cmd>Lspsaga outline<cr>')       /    local builtin = require 'telescope.builtin'       .    vim.api.nvim_create_autocmd('LspAttach', {   ?      group = vim.api.nvim_create_augroup('UserLspConfig', {}),         callback = function(ev)   4        -- Enable completion triggered by <c-x><c-o>   :        vim.bo[ev.buf].omnifunc = 'v:lua.vim.lsp.omnifunc'       (        local opts = { buffer = ev.buf }   K        vim.keymap.set('n', 'gd', '<cmd>Lspsaga goto_definition<cr>', opts)   A        vim.keymap.set('n', '<space>r', vim.lsp.buf.rename, opts)           vim.keymap.set(             { 'n', 'v' },             '<space>ca',   )          '<cmd>Lspsaga code_action<cr>',             opts   	        )   ?        vim.keymap.set('n', 'gr', builtin.lsp_references, opts)   
      end,       })           vim.keymap.set(   
      'n',         '<space>k',   #      '<cmd>Lspsaga hover_doc<cr>',         { silent = true }       )           -- error lens       vim.fn.sign_define {         {   %        name = 'DiagnosticSignError',           text = '',   '        texthl = 'DiagnosticSignError',           linehl = 'ErrorLine',         },         {   $        name = 'DiagnosticSignWarn',           text = '',   &        texthl = 'DiagnosticSignWarn',           linehl = 'WarningLine',         },         {   $        name = 'DiagnosticSignInfo',           text = '',   &        texthl = 'DiagnosticSignInfo',           linehl = 'InfoLine',         },         {   $        name = 'DiagnosticSignHint',           text = '',   &        texthl = 'DiagnosticSignHint',           linehl = 'HintLine',         },       }5��           F      <      �       1      �      5�_�   !       %       *          ����                                                                                                                                                                                                                                                                                                                                                v       e�Ζ    �         E      <    keymap.set("n", "<leader>o", "<cmd>Lspsaga outline<cr>")5��                                              �                                            5�_�   !   &   "   *   %          ����                                                                                                                                                                                                                                                                                                                                                             e���    �         E      <    keymap.set("n", "<leader>O", "<cmd>Lspsaga outline<cr>")5��                                            �                                              5�_�   %   '           &          ����                                                                                                                                                                                                                                                                                                                                                             e���    �         E      F    keymap.set("n", "<C-c>j", "<cmd>Lspsaga diagnostic_jump_prev<cr>")5��                         v                     �                        u                    �                        u                    �                        x                    �                         {                     5�_�   &   (           '          ����                                                                                                                                                                                                                                                                                                                                                             e��     �         E      F    keymap.set("n", "<C-c>k", "<cmd>Lspsaga diagnostic_jump_prev<cr>")5��                        z                    �                         {                     5�_�   '   )           (          ����                                                                                                                                                                                                                                                                                                                                                v       e��     �         E    �         E      F    keymap.set("n", "<C-c>k", "<cmd>Lspsaga diagnostic_jump_next<cr>")5��                        �                    5�_�   (               )          ����                                                                                                                                                                                                                                                                                                                                                             e��    �         E      F    keymap.set("n", "<C-c>j", "<cmd>Lspsaga diagnostic_jump_next<cr>")5��                        �                    5�_�   !   #       %   "          ����                                                                                                                                                                                                                                                                                                                                       %           V        e��+    �         E      <    keymap.set("n", "<leader>O", "<cmd>Lspsaga outline<cr>")5��                                            5�_�   "   $           #   '   !    ����                                                                                                                                                                                                                                                                                                                                                             e�ˎ     �   &   (   E      S    vim.keymap.set("n", "<space>", "<cmd>Lspsaga hover_doc<cr>", { silent = true })5��    &                      �                     5�_�   #               $   '        ����                                                                                                                                                                                                                                                                                                                                                             e�˟    �   &   (   E      T    vim.keymap.set("n", "<space>H", "<cmd>Lspsaga hover_doc<cr>", { silent = true })5��    &                      �                     5�_�                         ����                                                                                                                                                                                                                                                                                                                                                             e��     �      	   
          require("lspsaga").setup({   		})�      	         			�   	   
       �      
      7   			preview = {       lines_above = 0,       lines_below = 10,     },     scroll_preview = {       scroll_down = "<C-f>",       scroll_up = "<C-b>",     },     definition = {       edit = "<C-c>o",       vsplit = "<C-c>v",       split = "<C-c>i",       tabe = "<C-c>t",       quit = "q",       close = "<Esc>",     },     request_timeout = 2000,     finder = {       edit = { "o", "<CR>" },       vsplit = "s",       split = "i",       tabe = "t",       quit = { "q", "<ESC>" },     },     lightbulb = {       enable = false,     },     diagnostic = {       show_code_action = true,       show_source = true,       jump_num_shortcut = true,       keys = {         exec_action = "o",         quit = "q",         go_action = "g",       },       theme = {},     },     outline = {       win_position = "right",       win_with = "",       win_width = 30,       show_detail = true,       auto_preview = true,       auto_refresh = true,       auto_close = true,       custom_sort = nil,       keys = {         jump = "o",         expand_collapse = "u",         quit = "q",       },     },     symbol_in_winbar = {       enable = true,�   ?   @   B    �   >   @   B   )       enable = true,       separator = " ",       hide_keyword = true,       show_file = true,       folder_level = 2,       respect_root = false,       color_mode = true,     },     ui = {   !    -- currently only round theme       theme = "round",   *    -- this option only work in neovim 0.9       title = false,   =    -- border type can be single,double,rounded,solid,shadow.       border = "rounded",       winblend = 0,       expand = "",       collapse = "",       preview = " ",       code_action = "",       diagnostic = "",       incoming = " ",       outgoing = " ",       colors = {   ,      --float window normal background color         normal_bg = "#141423",         --title background color         title_bg = "#FF7070",         red = "#e95678",         magenta = "#b33076",         orange = "#FF8700",         yellow = "#f7bb3b",         green = "#afd700",         cyan = "#36d0e0",         blue = "#61afef",         purple = "#CBA6F7",         white = "#d1d4cf",         black = "#1c1c19",       },       kind = {},     },5��                        �                      �                          �                      �                         �                     �                  6      �               �      �    >              (      �              �      5�_�                    d       ����                                                                                                                                                                                                                                                                                                                                                             e��     �      i   j   `         preview = {           lines_above = 0,           lines_below = 10,         },         scroll_preview = {           scroll_down = "<C-f>",           scroll_up = "<C-b>",         },         definition = {           edit = "<C-c>o",           vsplit = "<C-c>v",           split = "<C-c>i",           tabe = "<C-c>t",           quit = "q",           close = "<Esc>",         },         request_timeout = 2000,         finder = {           edit = { "o", "<CR>" },           vsplit = "s",           split = "i",           tabe = "t",            quit = { "q", "<ESC>" },         },         lightbulb = {           enable = false,         },         diagnostic = {            show_code_action = true,           show_source = true,   !        jump_num_shortcut = true,           keys = {             exec_action = "o",             quit = "q",             go_action = "g",   
        },           theme = {},         },         outline = {           win_position = "right",           win_with = "",           win_width = 30,           show_detail = true,           auto_preview = true,           auto_refresh = true,           auto_close = true,           custom_sort = nil,           keys = {             jump = "o",              expand_collapse = "u",             quit = "q",   
        },         },         symbol_in_winbar = {           enable = true,           separator = " ",           hide_keyword = true,           show_file = true,           folder_level = 2,           respect_root = false,           color_mode = true,         },         ui = {   %        -- currently only round theme           theme = "round",   .        -- this option only work in neovim 0.9           title = false,   A        -- border type can be single,double,rounded,solid,shadow.           border = "rounded",           winblend = 0,           expand = "",           collapse = "",           preview = " ",           code_action = "",           diagnostic = "",           incoming = " ",           outgoing = " ",           colors = {   0          --float window normal background color              normal_bg = "#141423",   "          --title background color             title_bg = "#FF7070",             red = "#e95678",             magenta = "#b33076",             orange = "#FF8700",             yellow = "#f7bb3b",             green = "#afd700",             cyan = "#36d0e0",             blue = "#61afef",             purple = "#CBA6F7",             white = "#d1d4cf",             black = "#1c1c19",   
        },           kind = {},         },       })5��           _      _      �       �      =	      5�_�                       	    ����                                                                                                                                                                                                                                                                                                                                                             e��1    �         j      				�         k       �         k              split = "<C-c>i",5��                          �                     �                         �                     �                         �                     �                         �                     �                          �                     �                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                v       e��@     �         j       5��                          �                     �                         �                     �                         �                     �                         �                     �                          �                     5�_�                             ����                                                                                                                                                                                                                                                                                                                                                v       e��D     �              5��                          �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             e���    �      	   
          require("lspsaga").setup({   		})�      	         			�   	   
       �      
      7   			 preview = {       lines_above = 0,       lines_below = 10,     },     scroll_preview = {       scroll_down = "<C-f>",       scroll_up = "<C-b>",     },     definition = {       edit = "<C-c>o",       vsplit = "<C-c>v",       split = "<C-c>i",       tabe = "<C-c>t",       quit = "q",       close = "<Esc>",     },     request_timeout = 2000,     finder = {       edit = { "o", "<CR>" },       vsplit = "s",       split = "i",       tabe = "t",       quit = { "q", "<ESC>" },     },     lightbulb = {       enable = false,     },     diagnostic = {       show_code_action = true,       show_source = true,       jump_num_shortcut = true,       keys = {         exec_action = "o",         quit = "q",         go_action = "g",       },       theme = {},     },     outline = {       win_position = "right",       win_with = "",       win_width = 30,       show_detail = true,       auto_preview = true,       auto_refresh = true,       auto_close = true,       custom_sort = nil,       keys = {         jump = "o",         expand_collapse = "u",         quit = "q",       },     },     symbol_in_winbar = {       enable = true�   ?   @   B    �   >   @   B   (       enable = true,       separator = " ",       hide_keyword = true,       show_file = true,       folder_level = 2,       respect_root = false,       color_mode = true,     },     ui = {   !    -- currently only round theme       theme = "round",   *    -- this option only work in neovim 0.9       title = false,   =    -- border type can be single,double,rounded,solid,shadow.       border = "rounded",       winblend = 0,       expand = "",       collapse = "",       preview = " ",       code_action = "",       diagnostic = "",       incoming = " ",       outgoing = " ",       colors = {   ,      --float window normal background color         normal_bg = "#141423",         --title background color         title_bg = "#FF7070",         red = "#e95678",         magenta = "#b33076",         orange = "#FF8700",         yellow = "#f7bb3b",         green = "#afd700",         cyan = "#36d0e0",         blue = "#61afef",         purple = "#CBA6F7",         white = "#d1d4cf",         black = "#1c1c19",       },       kind = {},5��                        �                      �                          �                      �                         �                     �                  6      �               �      �    >              '      �              �      5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             e��*   
 �   	             }5��    	                     �                      5��