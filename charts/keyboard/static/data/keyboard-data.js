const _KeyboardData = 
{
 "keyboards": {
  "fr-t-k0-azerty.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard": {
    "locales": {
     "locale": {
      "@_id": "br"
     }
    },
    "version": {
     "@_number": "1.0.0"
    },
    "info": {
     "@_author": "Team Keyboard",
     "@_normalization": "NFC",
     "@_layout": "AZERTY",
     "@_indicator": "FR"
    },
    "names": {
     "name": [
      {
       "@_value": "French Test"
      },
      {
       "@_value": "French Test AZERTY"
      }
     ]
    },
    "settings": {
     "@_fallback": "omit"
    },
    "vkeys": {
     "vkey": [
      {
       "@_from": "Q",
       "@_to": "A"
      },
      {
       "@_from": "W",
       "@_to": "Z"
      },
      {
       "@_from": "A",
       "@_to": "Q"
      },
      {
       "@_from": "Z",
       "@_to": "W"
      },
      {
       "@_from": "BKQUOTE",
       "@_to": "QUOTE"
      },
      {
       "@_from": "MINUS",
       "@_to": "LBRKT"
      },
      {
       "@_from": "LBRKT",
       "@_to": "RBRKT"
      },
      {
       "@_from": "COLON",
       "@_to": "M"
      },
      {
       "@_from": "QUOTE",
       "@_to": "BKQUOTE"
      },
      {
       "@_from": "M",
       "@_to": "COMMA"
      },
      {
       "@_from": "COMMA",
       "@_to": "PERIOD"
      },
      {
       "@_from": "PERIOD",
       "@_to": "SLASH"
      },
      {
       "@_from": "SLASH",
       "@_to": "EXCLAMATION"
      }
     ]
    },
    "displays": {
     "display": {
      "@_to": "\\u0300",
      "@_display": "${grave}"
     },
     "displayOptions": {
      "@_baseCharacter": "x"
     }
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "shift",
       "@_switch": "shift"
      },
      {
       "@_id": "numeric",
       "@_switch": "numeric"
      },
      {
       "@_id": "symbol",
       "@_switch": "symbol"
      },
      {
       "@_id": "base",
       "@_switch": "base"
      },
      {
       "@_id": "extra",
       "@_gap": "true"
      },
      {
       "@_id": "u-grave",
       "@_to": "ü"
      },
      {
       "@_id": "e-grave",
       "@_to": "é"
      },
      {
       "@_id": "e-acute",
       "@_to": "è"
      },
      {
       "@_id": "c-cedilla",
       "@_to": "ç"
      },
      {
       "@_id": "a-acute",
       "@_to": "à"
      },
      {
       "@_id": "bullet",
       "@_to": "•"
      },
      {
       "@_id": "umlaut",
       "@_to": "¨"
      },
      {
       "@_id": "super-2",
       "@_to": "²",
       "@_longPress": "₂"
      },
      {
       "@_id": "a",
       "@_flicks": "a",
       "@_to": "a",
       "@_longPress": "à â á ä ã å ā"
      },
      {
       "@_id": "A",
       "@_flicks": "b",
       "@_to": "A",
       "@_longPress": "À Á Ä Ã Å Ā"
      }
     ],
     "flicks": [
      {
       "flick": [
        {
         "@_directions": "nw",
         "@_to": "\\u1234"
        },
        {
         "@_directions": "nw se",
         "@_to": "\\uFFFF"
        },
        {
         "@_directions": "e",
         "@_to": "\\uFFF0"
        }
       ],
       "@_id": "a"
      },
      {
       "flick": [
        {
         "@_directions": "nw",
         "@_to": "\\u4567"
        },
        {
         "@_directions": "nw se",
         "@_to": "\\uFFFF"
        },
        {
         "@_directions": "e",
         "@_to": "\\uFFF0"
        }
       ],
       "@_id": "b"
      }
     ]
    },
    "layers": [
     {
      "layer": [
       {
        "row": [
         {
          "@_keys": "super-2 amp e-grave double-quote apos open-paren hyphen e-acute underscore c-cedilla a-acute close-paren equal"
         },
         {
          "@_keys": "a z e r t y u i o p caret dollar"
         },
         {
          "@_keys": "q s d f g h j k l m u-grave asterisk"
         },
         {
          "@_keys": "open-angle w x c v b n comma semi-colon colon bang"
         },
         {
          "@_keys": "space"
         }
        ],
        "@_modifier": "none"
       },
       {
        "row": [
         {
          "@_keys": "1 2 3 4 5 6 7 8 9 0 degree plus"
         },
         {
          "@_keys": "A Z E R T Y U I O P umlaut pound"
         },
         {
          "@_keys": "Q S D F G H J K L M percent micro"
         },
         {
          "@_keys": "close-angle W X C V B N question period slash section"
         },
         {
          "@_keys": "space"
         }
        ],
        "@_modifier": "shift"
       }
      ],
      "@_form": "iso"
     },
     {
      "layer": [
       {
        "row": [
         {
          "@_keys": "a z e r t y u i o p"
         },
         {
          "@_keys": "q s d f g h j k l m"
         },
         {
          "@_keys": "shift gap w x c v b n gap"
         },
         {
          "@_keys": "numeric extra space enter"
         }
        ],
        "@_id": "base"
       },
       {
        "row": [
         {
          "@_keys": "A Z E R T Y U I O P"
         },
         {
          "@_keys": "Q S D F G H J K L M"
         },
         {
          "@_keys": "base W X C V B N"
         },
         {
          "@_keys": "numeric extra space enter"
         }
        ],
        "@_id": "shift"
       },
       {
        "row": [
         {
          "@_keys": "1 2 3 4 5 6 7 8 9 0"
         },
         {
          "@_keys": "hyphen slash colon semi-colon open-paren close-paren dollar amp at double-quote"
         },
         {
          "@_keys": "symbol period comma question bang double-quote"
         },
         {
          "@_keys": "base extra space enter"
         }
        ],
        "@_id": "numeric"
       },
       {
        "row": [
         {
          "@_keys": "open-square close-square open-curly close-curly hash percent caret asterisk plus equal"
         },
         {
          "@_keys": "underscore backslash pipe tilde open-angle close-angle euro pound yen bullet"
         },
         {
          "@_keys": "numeric period comma question bang double-quote"
         },
         {
          "@_keys": "base extra space enter"
         }
        ],
        "@_id": "symbol"
       }
      ],
      "@_form": "touch",
      "@_minDeviceWidth": "150"
     }
    ],
    "variables": {
     "string": [
      {
       "@_id": "grave",
       "@_value": "`"
      },
      {
       "@_id": "caret",
       "@_value": "^"
      },
      {
       "@_id": "umlaut",
       "@_value": "¨"
      },
      {
       "@_id": "tilde",
       "@_value": "~"
      }
     ],
     "set": [
      {
       "@_id": "vowel",
       "@_value": "a e i o u  A E I O U"
      },
      {
       "@_id": "graveVowel",
       "@_value": "à è ì ò ù  À È Ì Ò Ù"
      },
      {
       "@_id": "caretVowel",
       "@_value": "â ê î ô û  Â Ê Î Ô Û"
      },
      {
       "@_id": "umlautVowel",
       "@_value": "ä ë ï ö ü  Ä Ë Ï Ö Ü"
      },
      {
       "@_id": "spacing_accent",
       "@_value": "${grave} ${caret} ${umlaut} ${tilde}"
      }
     ]
    },
    "transforms": [
     {
      "transformGroup": [
       {
        "transform": [
         {
          "@_from": "${grave}($[vowel])",
          "@_to": "$[1:graveVowel]"
         },
         {
          "@_from": "${caret}($[vowel])",
          "@_to": "$[1:caretVowel]"
         },
         {
          "@_from": "${umlaut}($[vowel])",
          "@_to": "$[1:umlautVowel]"
         },
         {
          "@_from": "${umlaut}y",
          "@_to": "ÿ"
         },
         {
          "@_from": "${tilde}a",
          "@_to": "ã"
         },
         {
          "@_from": "${tilde}A",
          "@_to": "Ã"
         },
         {
          "@_from": "${tilde}n",
          "@_to": "ñ"
         },
         {
          "@_from": "${tilde}N",
          "@_to": "Ñ"
         },
         {
          "@_from": "${tilde}o",
          "@_to": "õ"
         },
         {
          "@_from": "${tilde}O",
          "@_to": "Õ"
         },
         {
          "@_from": "($[spacing_accent])",
          "@_to": "$1"
         }
        ]
       },
       {
        "reorder": [
         {
          "@_from": "\\u1A60",
          "@_order": "127"
         },
         {
          "@_from": "\\u1A6B",
          "@_order": "42"
         },
         {
          "@_from": "[\\u1A75-\\u1A79]",
          "@_order": "55"
         }
        ]
       }
      ],
      "@_type": "simple"
     }
    ],
    "@_locale": "fr-t-k0-azerty",
    "@_conformsTo": "techpreview"
   }
  },
  "ja-Latn.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard": {
    "locales": {
     "locale": {
      "@_id": "en"
     }
    },
    "version": {
     "@_number": "0.0.0"
    },
    "names": {
     "name": {
      "@_value": "Romaji (JIS)"
     }
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-currency.xml"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "1 2 3 4 5 6 7 8 9 0 hyphen caret yen"
        },
        {
         "@_keys": "q w e r t y u i o p at open-square"
        },
        {
         "@_keys": "a s d f g h j k l semi-colon colon close-square"
        },
        {
         "@_keys": "z x c v b n m comma period slash underscore"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "none"
      },
      {
       "row": [
        {
         "@_keys": "bang double-quote hash dollar percent amp apos open-paren close-paren 0 equal tilde pipe"
        },
        {
         "@_keys": "Q W E R T Y U I O P grave open-curly"
        },
        {
         "@_keys": "A S D F G H J K L plus asterisk close-curly"
        },
        {
         "@_keys": "Z X C V B N M open-angle close-angle question underscore"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "shift"
      }
     ],
     "@_form": "jis"
    },
    "@_locale": "ja-Latn",
    "@_conformsTo": "techpreview"
   }
  },
  "mt.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard": {
    "locales": {
     "locale": {
      "@_id": "en"
     }
    },
    "info": {
     "@_author": "Steven R. Loomis",
     "@_normalization": "NFC",
     "@_layout": "QWERTY",
     "@_indicator": "MT"
    },
    "names": {
     "name": [
      {
       "@_value": "Maltese"
      },
      {
       "@_value": "MSA 100:2002"
      }
     ]
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "a-grave",
       "@_to": "à"
      },
      {
       "@_id": "A-grave",
       "@_to": "À"
      },
      {
       "@_id": "e-grave",
       "@_to": "è"
      },
      {
       "@_id": "E-grave",
       "@_to": "È"
      },
      {
       "@_id": "i-grave",
       "@_to": "ì"
      },
      {
       "@_id": "I-grave",
       "@_to": "Ì"
      },
      {
       "@_id": "o-grave",
       "@_to": "ò"
      },
      {
       "@_id": "O-grave",
       "@_to": "Ò"
      },
      {
       "@_id": "u-grave",
       "@_to": "ù"
      },
      {
       "@_id": "U-grave",
       "@_to": "Ù"
      },
      {
       "@_id": "c-tikka",
       "@_to": "ċ"
      },
      {
       "@_id": "C-tikka",
       "@_to": "Ċ"
      },
      {
       "@_id": "g-tikka",
       "@_to": "ġ"
      },
      {
       "@_id": "G-tikka",
       "@_to": "Ġ"
      },
      {
       "@_id": "h-maqtugha",
       "@_to": "ħ"
      },
      {
       "@_id": "H-maqtugha",
       "@_to": "Ħ"
      },
      {
       "@_id": "z-tikka",
       "@_to": "ż"
      },
      {
       "@_id": "Z-tikka",
       "@_to": "Ż"
      },
      {
       "@_id": "c-cedilla",
       "@_to": "ç"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "c-tikka 1 2 3 4 5 6 7 8 9 0 hyphen equal"
        },
        {
         "@_keys": "q w e r t y u i o p g-tikka h-maqtugha"
        },
        {
         "@_keys": "a s d f g h j k l semi-colon hash"
        },
        {
         "@_keys": "z-tikka z x c v b n m comma period slash"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "none"
      },
      {
       "row": [
        {
         "@_keys": "C-tikka bang double-quote euro dollar percent caret amp open-paren close-paren underscore plus"
        },
        {
         "@_keys": "Q W E R T Y U I O P G-tikka H-maqtugha"
        },
        {
         "@_keys": "A S D F G H J K L colon at tilde"
        },
        {
         "@_keys": "Z-tikka Z X C V B N M open-angle close-angle question"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "shift"
      },
      {
       "row": [
        {
         "@_keys": "grave gap gap pound gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap e-grave gap gap gap u-grave i-grave o-grave gap open-square close-square"
        },
        {
         "@_keys": "a-grave gap gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "backslash gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "altR"
      },
      {
       "row": [
        {
         "@_keys": "not gap gap gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap E-grave gap gap gap U-grave I-grave O-grave gap open-curly close-curly"
        },
        {
         "@_keys": "A-grave gap gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "pipe gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "altR shift"
      }
     ],
     "@_form": "iso"
    },
    "@_locale": "mt",
    "@_conformsTo": "techpreview"
   }
  },
  "mt-t-k0-47key.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard": {
    "locales": {
     "locale": {
      "@_id": "en"
     }
    },
    "info": {
     "@_author": "Steven R. Loomis",
     "@_normalization": "NFC",
     "@_layout": "QWERTY",
     "@_indicator": "MT"
    },
    "names": {
     "name": [
      {
       "@_value": "Maltese 47-key"
      },
      {
       "@_value": "MSA 100:2002 47-key"
      }
     ]
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "a-grave",
       "@_to": "à"
      },
      {
       "@_id": "A-grave",
       "@_to": "À"
      },
      {
       "@_id": "e-grave",
       "@_to": "è"
      },
      {
       "@_id": "E-grave",
       "@_to": "È"
      },
      {
       "@_id": "i-grave",
       "@_to": "ì"
      },
      {
       "@_id": "I-grave",
       "@_to": "Ì"
      },
      {
       "@_id": "o-grave",
       "@_to": "ò"
      },
      {
       "@_id": "O-grave",
       "@_to": "Ò"
      },
      {
       "@_id": "u-grave",
       "@_to": "ù"
      },
      {
       "@_id": "U-grave",
       "@_to": "Ù"
      },
      {
       "@_id": "c-tikka",
       "@_to": "ċ"
      },
      {
       "@_id": "C-tikka",
       "@_to": "Ċ"
      },
      {
       "@_id": "g-tikka",
       "@_to": "ġ"
      },
      {
       "@_id": "G-tikka",
       "@_to": "Ġ"
      },
      {
       "@_id": "h-maqtugha",
       "@_to": "ħ"
      },
      {
       "@_id": "H-maqtugha",
       "@_to": "Ħ"
      },
      {
       "@_id": "z-tikka",
       "@_to": "ż"
      },
      {
       "@_id": "Z-tikka",
       "@_to": "Ż"
      },
      {
       "@_id": "c-cedilla",
       "@_to": "ç"
      },
      {
       "@_id": "gap",
       "@_gap": "true",
       "@_width": "1"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "c-tikka 1 2 3 4 5 6 7 8 9 0 hyphen equal"
        },
        {
         "@_keys": "q w e r t y u i o p g-tikka h-maqtugha z-tikka"
        },
        {
         "@_keys": "a s d f g h j k l semi-colon apos"
        },
        {
         "@_keys": "z x c v b n m comma period slash"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "none"
      },
      {
       "row": [
        {
         "@_keys": "C-tikka bang at euro dollar percent caret amp asterisk open-paren close-paren underscore plus"
        },
        {
         "@_keys": "Q W E R T Y U I O P G-tikka H-maqtugha Z-tikka"
        },
        {
         "@_keys": "A S D F G H J K L colon double-quote"
        },
        {
         "@_keys": "Z X C V B N M open-angle close-angle question"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "shift"
      },
      {
       "row": [
        {
         "@_keys": "grave gap gap pound gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap e-grave gap gap gap u-grave i-grave o-grave gap open-square close-square backslash"
        },
        {
         "@_keys": "a-grave gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "altR"
      },
      {
       "row": [
        {
         "@_keys": "tilde gap gap gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap E-grave gap gap gap U-grave I-grave O-grave gap open-curly close-curly pipe"
        },
        {
         "@_keys": "A-grave gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "gap gap gap gap gap gap gap gap gap gap"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "altR shift"
      }
     ],
     "@_form": "us"
    },
    "@_locale": "mt-t-k0-47key",
    "@_conformsTo": "techpreview"
   }
  },
  "pt-t-k0-abnt2.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keyboard": {
    "locales": {
     "locale": {
      "@_id": "pt"
     }
    },
    "version": {
     "@_number": "0.0.0"
    },
    "names": {
     "name": {
      "@_value": "Portuguese (Brazil) (ABNT2)"
     }
    },
    "displays": {
     "display": [
      {
       "@_to": "\\m{acute}",
       "@_display": "´"
      },
      {
       "@_to": "\\m{grave}",
       "@_display": "`"
      },
      {
       "@_to": "\\m{umlaut}",
       "@_display": "¨"
      },
      {
       "@_to": "\\m{caret}",
       "@_display": "^"
      },
      {
       "@_to": "\\m{tilde}",
       "@_display": "~"
      }
     ]
    },
    "keys": {
     "import": [
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-punctuation.xml"
      },
      {
       "@_base": "cldr",
       "@_path": "techpreview/keys-Zyyy-currency.xml"
      }
     ],
     "key": [
      {
       "@_id": "d-acute",
       "@_to": "\\m{acute}"
      },
      {
       "@_id": "d-grave",
       "@_to": "\\m{grave}"
      },
      {
       "@_id": "d-umlaut",
       "@_to": "\\m{umlaut}"
      },
      {
       "@_id": "d-caret",
       "@_to": "\\m{caret}"
      },
      {
       "@_id": "d-tilde",
       "@_to": "\\m{tilde}"
      },
      {
       "@_id": "c-cedilla",
       "@_to": "ç"
      },
      {
       "@_id": "C-cedilla",
       "@_to": "Ç"
      },
      {
       "@_id": "super-1",
       "@_to": "¹"
      },
      {
       "@_id": "super-2",
       "@_to": "²"
      },
      {
       "@_id": "super-3",
       "@_to": "³"
      },
      {
       "@_id": "ordinal-feminine",
       "@_to": "ª"
      },
      {
       "@_id": "ordinal-masculine",
       "@_to": "º"
      }
     ]
    },
    "layers": {
     "layer": [
      {
       "row": [
        {
         "@_keys": "apos 1 2 3 4 5 6 7 8 9 0 hyphen equal"
        },
        {
         "@_keys": "q w e r t y u i o p d-acute open-square"
        },
        {
         "@_keys": "a s d f g h j k l c-cedilla d-tilde close-square"
        },
        {
         "@_keys": "backslash z x c v b n m comma period semi-colon slash"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "none"
      },
      {
       "row": [
        {
         "@_keys": "double-quote bang at hash dollar percent d-umlaut amp asterisk open-paren close-paren underscore plus"
        },
        {
         "@_keys": "Q W E R T Y U I O P d-grave open-curly"
        },
        {
         "@_keys": "A S D F G H J K L C-cedilla d-tilde close-curly"
        },
        {
         "@_keys": "pipe Z X C V B N M open-angle close-angle colon question"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "shift"
      },
      {
       "row": [
        {
         "@_keys": "gap super-1 super-2 super-3 pound cent not gap gap gap gap gap section"
        },
        {
         "@_keys": "slash question degree gap gap gap gap gap gap gap gap ordinal-feminine"
        },
        {
         "@_keys": "gap gap gap gap gap gap gap gap gap gap gap ordinal-masculine"
        },
        {
         "@_keys": "gap gap gap cruzeiro gap gap gap gap gap gap gap degree"
        },
        {
         "@_keys": "space"
        }
       ],
       "@_modifier": "altR"
      }
     ],
     "@_form": "abnt2"
    },
    "@_locale": "pt-t-k0-abnt2",
    "@_conformsTo": "techpreview"
   }
  }
 },
 "imports": {
  "keys-Latn-implied.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keys": {
    "key": [
     {
      "@_id": "gap",
      "@_gap": "true",
      "@_width": "1"
     },
     {
      "@_id": "space",
      "@_to": "\\u{0020}",
      "@_stretch": "true",
      "@_width": "1"
     },
     {
      "@_id": "0",
      "@_to": "0"
     },
     {
      "@_id": "1",
      "@_to": "1"
     },
     {
      "@_id": "2",
      "@_to": "2"
     },
     {
      "@_id": "3",
      "@_to": "3"
     },
     {
      "@_id": "4",
      "@_to": "4"
     },
     {
      "@_id": "5",
      "@_to": "5"
     },
     {
      "@_id": "6",
      "@_to": "6"
     },
     {
      "@_id": "7",
      "@_to": "7"
     },
     {
      "@_id": "8",
      "@_to": "8"
     },
     {
      "@_id": "9",
      "@_to": "9"
     },
     {
      "@_id": "A",
      "@_to": "A"
     },
     {
      "@_id": "B",
      "@_to": "B"
     },
     {
      "@_id": "C",
      "@_to": "C"
     },
     {
      "@_id": "D",
      "@_to": "D"
     },
     {
      "@_id": "E",
      "@_to": "E"
     },
     {
      "@_id": "F",
      "@_to": "F"
     },
     {
      "@_id": "G",
      "@_to": "G"
     },
     {
      "@_id": "H",
      "@_to": "H"
     },
     {
      "@_id": "I",
      "@_to": "I"
     },
     {
      "@_id": "J",
      "@_to": "J"
     },
     {
      "@_id": "K",
      "@_to": "K"
     },
     {
      "@_id": "L",
      "@_to": "L"
     },
     {
      "@_id": "M",
      "@_to": "M"
     },
     {
      "@_id": "N",
      "@_to": "N"
     },
     {
      "@_id": "O",
      "@_to": "O"
     },
     {
      "@_id": "P",
      "@_to": "P"
     },
     {
      "@_id": "Q",
      "@_to": "Q"
     },
     {
      "@_id": "R",
      "@_to": "R"
     },
     {
      "@_id": "S",
      "@_to": "S"
     },
     {
      "@_id": "T",
      "@_to": "T"
     },
     {
      "@_id": "U",
      "@_to": "U"
     },
     {
      "@_id": "V",
      "@_to": "V"
     },
     {
      "@_id": "W",
      "@_to": "W"
     },
     {
      "@_id": "X",
      "@_to": "X"
     },
     {
      "@_id": "Y",
      "@_to": "Y"
     },
     {
      "@_id": "Z",
      "@_to": "Z"
     },
     {
      "@_id": "a",
      "@_to": "a"
     },
     {
      "@_id": "b",
      "@_to": "b"
     },
     {
      "@_id": "c",
      "@_to": "c"
     },
     {
      "@_id": "d",
      "@_to": "d"
     },
     {
      "@_id": "e",
      "@_to": "e"
     },
     {
      "@_id": "f",
      "@_to": "f"
     },
     {
      "@_id": "g",
      "@_to": "g"
     },
     {
      "@_id": "h",
      "@_to": "h"
     },
     {
      "@_id": "i",
      "@_to": "i"
     },
     {
      "@_id": "j",
      "@_to": "j"
     },
     {
      "@_id": "k",
      "@_to": "k"
     },
     {
      "@_id": "l",
      "@_to": "l"
     },
     {
      "@_id": "m",
      "@_to": "m"
     },
     {
      "@_id": "n",
      "@_to": "n"
     },
     {
      "@_id": "o",
      "@_to": "o"
     },
     {
      "@_id": "p",
      "@_to": "p"
     },
     {
      "@_id": "q",
      "@_to": "q"
     },
     {
      "@_id": "r",
      "@_to": "r"
     },
     {
      "@_id": "s",
      "@_to": "s"
     },
     {
      "@_id": "t",
      "@_to": "t"
     },
     {
      "@_id": "u",
      "@_to": "u"
     },
     {
      "@_id": "v",
      "@_to": "v"
     },
     {
      "@_id": "w",
      "@_to": "w"
     },
     {
      "@_id": "x",
      "@_to": "x"
     },
     {
      "@_id": "y",
      "@_to": "y"
     },
     {
      "@_id": "z",
      "@_to": "z"
     }
    ]
   }
  },
  "keys-Zyyy-currency.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keys": {
    "key": [
     {
      "@_id": "dollar",
      "@_to": "$"
     },
     {
      "@_id": "euro",
      "@_to": "€"
     },
     {
      "@_id": "pound",
      "@_to": "£"
     },
     {
      "@_id": "yen",
      "@_to": "¥"
     },
     {
      "@_id": "cruzeiro",
      "@_to": "₢"
     },
     {
      "@_id": "cent",
      "@_to": "¢"
     }
    ]
   }
  },
  "keys-Zyyy-punctuation.xml": {
   "?xml": {
    "@_version": "1.0",
    "@_encoding": "UTF-8"
   },
   "keys": {
    "key": [
     {
      "@_id": "amp",
      "@_to": "\\u{0026}"
     },
     {
      "@_id": "apos",
      "@_to": "'"
     },
     {
      "@_id": "asterisk",
      "@_to": "*"
     },
     {
      "@_id": "at",
      "@_to": "@"
     },
     {
      "@_id": "backslash",
      "@_to": "\\u{005C}"
     },
     {
      "@_id": "bang",
      "@_to": "!"
     },
     {
      "@_id": "caret",
      "@_to": "^"
     },
     {
      "@_id": "close-angle",
      "@_to": ">"
     },
     {
      "@_id": "close-curly",
      "@_to": "}"
     },
     {
      "@_id": "close-paren",
      "@_to": ")"
     },
     {
      "@_id": "close-square",
      "@_to": "]"
     },
     {
      "@_id": "colon",
      "@_to": ":"
     },
     {
      "@_id": "comma",
      "@_to": ","
     },
     {
      "@_id": "degree",
      "@_to": "°"
     },
     {
      "@_id": "double-quote",
      "@_to": "\\u{0022}"
     },
     {
      "@_id": "equal",
      "@_to": "="
     },
     {
      "@_id": "grave",
      "@_to": "`"
     },
     {
      "@_id": "hash",
      "@_to": "#"
     },
     {
      "@_id": "hyphen",
      "@_to": "-"
     },
     {
      "@_id": "micro",
      "@_to": "µ"
     },
     {
      "@_id": "not",
      "@_to": "¬"
     },
     {
      "@_id": "open-angle",
      "@_to": "\\u{003C}"
     },
     {
      "@_id": "open-curly",
      "@_to": "{"
     },
     {
      "@_id": "open-paren",
      "@_to": "("
     },
     {
      "@_id": "open-square",
      "@_to": "["
     },
     {
      "@_id": "percent",
      "@_to": "%"
     },
     {
      "@_id": "period",
      "@_to": "."
     },
     {
      "@_id": "pipe",
      "@_to": "|"
     },
     {
      "@_id": "plus",
      "@_to": "+"
     },
     {
      "@_id": "question",
      "@_to": "?"
     },
     {
      "@_id": "section",
      "@_to": "§"
     },
     {
      "@_id": "semi-colon",
      "@_to": ";"
     },
     {
      "@_id": "slash",
      "@_to": "/"
     },
     {
      "@_id": "tilde",
      "@_to": "~"
     },
     {
      "@_id": "underscore",
      "@_to": "_"
     }
    ]
   }
  }
 }
}