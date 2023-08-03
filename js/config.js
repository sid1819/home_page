const CONFIG = {
  /**
   * The category, name, key, url, search path, color, icon, and quicklaunch properties for your commands.
   * Icons must be added to "icons" folder and their values/names must be updated.
   * If none of the specified keys are matched, the '*' key is used.
   * Commands without a category don't show up in the help menu.
   * Update line 11 and 13 if you prefer using Google.
   */
  commands: [{
      name: 'google',
      key: '*',
      url: 'https://google.com',
      search: '/search?q={}'
    },
    {
      category: 'Programming',
      name: 'Codeforces',
      key: 'c',
      url: 'https://codeforces.com/profile/dustin_123',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #FFC107, #2196F3, #F44336)',
      icon: 'codeforces',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'HackerRank',
      key: 'hr',
      url: 'https://www.hackerrank.com/vamp_niklaus?hr_r=1',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #FFC107, #2196F3, #F44336)',
      icon: 'hackerrank',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'W3School',
      key: 'w3',
      url: 'https://profile.w3schools.com/profile/vamp_niklaus',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #FFC107, #2196F3, #F44336)',
      icon: 'w3school',
      quickLaunch: true,
    },
    {
      category: 'Social',
      name: 'WhatsApp',
      key: 'w',
      url: 'https://web.whatsapp.com',
      color: 'linear-gradient(135deg, #25D366, #128C7E, #075E54)',
      icon: 'whatsapp',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'YouTube',
      key: 'y',
      url: 'https://youtube.com',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
      icon: 'youtube',
      quickLaunch: false,
    },

    {
      category: 'Social',
      name: 'Telegram',
      key: 'tg',
      url: 'https://web.telegram.org',
      color: '#5682a3',
      icon: 'telegram',
      quickLaunch: false,
    },
    {
      category: 'Social',
      name: 'Instagram',
      key: 'i',
      url: 'https://www.instagram.com',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      icon: 'instagram',
      quickLaunch: true,
    },


    {
      category: 'Programming',
      name: 'Codechef',
      key: 'cc',
      url: 'https://www.codechef.com/users/vamp_niklaus',
      search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #5D4037, #CFD8DC, #EF5350)',
      icon: 'codechef',
      quickLaunch: true,
    },
    // {
    //   category: 'Programming',
    //   name: 'HackerNews',
    //   key: 'h',
    //   url: 'https://news.ycombinator.com/',
    //   search: '/search?stories[query]={}',
    //   color: 'linear-gradient(135deg, #FF6600, #DC5901)',
    //   icon: 'hackernews',
    //   quickLaunch: true,
    // },

    {
      category: 'Programming',
      name: 'LeetCode',
      key: 'lc',
      url: 'https://leetcode.com/vamp_niklaus/',
      // search: '/results?search_query={}',
      color: 'linear-gradient(135deg, #FFC107)',
      icon: 'leetcode',
      quickLaunch: true,
    },
 
    // {
    //   category: 'Programming',
    //   name: 'MDN',
    //   key: 'md',
    //   url: 'https://developer.mozilla.org/en-US',
    //   search: '/search?q={}',
    //   color: '#212121',
    //   icon: 'mdn',
    //   quickLaunch: false,
    // },
    // {
    //   category: 'Programming',
    //   name: 'DevDocs',
    //   key: 'dd',
    //   url: 'https://devdocs.io',
    //   color: 'linear-gradient(135deg, #33373A, #484949)',
    //   icon: 'devdocs',
    //   quickLaunch: false,
    // },

    {
      category: 'Programming',
      name: 'Geeks For Geeks',
      key: 'gfg',
      url: 'https://auth.geeksforgeeks.org/user/vamp_niklaus/practice',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #00FF00)',
      icon: 'gfg',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Coding Ninjas',
      key: 'cn',
      url: 'https://www.codingninjas.com/studio/profile/vamp_niklaus',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #00FF00)',
      icon: 'coding_ninjas',
      quickLaunch: true,
    },

    {
      category: 'Programming',
      name: 'GitHub',
      key: 'g',
      url: 'https://github.com/Vamp-Niklaus',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
      icon: 'github',
      quickLaunch: true,
    },
    {
      category: 'Programming',
      name: 'Monkeytype',
      key: 'mt',
      url: 'https://monkeytype.com/profile/vamp_niklaus',
      color: 'linear-gradient(135deg, #FFFF00, #FFFF00)',
      icon: 'monkeytype',
      quickLaunch: false,
    },
    {
      category: 'Programming',
      name: 'StackOverflow',
      key: 'st',
      url: 'https://stackoverflow.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #53341C, #F48024)',
      icon: 'stackoverflow',
      quickLaunch: true,
    },
 
    {
      category: 'Fun',
      name: 'YT Music',
      key: 'ym',
      url: 'https://music.youtube.com/',
      search: '/search/{}',
      color: '#1dd35e',
      icon: 'ytmusic',
      quickLaunch: false,
    },
    {
      category: 'Fun',
      name: 'Netflix',
      key: 'n',
      url: 'https://www.netflix.com',
      color: 'linear-gradient(135deg, #E50914, #CB020C)',
      icon: 'netflix',
      quickLaunch: false,
    },

    {
      category: 'Fun',
      name: 'Reddit',
      key: 'r',
      url: 'https://reddit.com',
      search: '/search?q={}',
      color: 'linear-gradient(135deg, #FF8456, #FF4500)',
      icon: 'reddit',
      quickLaunch: false,
    },
    // {
    //   category: 'Social & Fun',
    //   name: 'Spotify',
    //   key: 's',
    //   url: 'https://open.spotify.com/',
    //   search: '/search/{}',
    //   color: '#1dd35e',
    //   icon: 'spotify',
    //   quickLaunch: false,
    // },
    // {
    //   category: 'Social & Fun',
    //   name: 'Twitch',
    //   key: 'tw',
    //   url: 'https://www.twitch.tv',
    //   search: '/directory/game/{}',
    //   color: 'linear-gradient(135deg, #6441a5, #4b367c)',
    //   icon: 'twitch',
    //   quickLaunch: false,
    // },


    {
      category: 'Social',
      name: 'Twitter',
      key: 't',
      url: 'https://www.twitter.com',
      search: '/search?q={}&src=typed_query',
      color: 'linear-gradient(135deg, #1DA1F2, #19608F)',
      icon: 'twitter',
      quickLaunch: true,
    },

    {
      category: 'Social',
      name: 'LinkedIn',
      key: 'l',
      url: 'https://linkedin.com',
      search: '/search/results/all/?keywords={}',
      color: 'linear-gradient(135deg, #006CA4, #0077B5)',
      icon: 'linkedin',
      quickLaunch: true,
    },
       
    {
      category: 'Social',
      name: 'Discord',
      key: 'dc',
      url: 'https://discord.com/app',
      color: '#7289da',
      icon: 'discord',
      quickLaunch: false,
    },
    {
      category: 'Other',
      name: 'Mail',
      key: 'm',
      url: 'https://gmail.com',
      search: '/#search/text={}',
      color: 'linear-gradient(135deg, #dd5145, #dd5145)',
      icon: 'mail',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Drive',
      key: 'd',
      url: 'https://drive.google.com',
      search: '/drive/search?q={}',
      color: 'linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)',
      icon: 'drive',
      quickLaunch: false,
    },
    {
      category: 'Other',
      name: 'Notion',
      key: 'ns',
      url: 'https://www.notion.so',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'notion',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'CFV',
      key: 'cfv',
      url: 'https://cfviz.netlify.app/',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'cfv',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Code Hunt',
      key: 'ch',
      url: 'https://codehunt.cc/',
      color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
      icon: 'codehunt',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Chat GPT',
      key: 'cg',
      url: 'https://chat.openai.com/',
      color: 'linear-gradient(135deg, #00A67E)',
      icon: 'chatgpt',
      quickLaunch: true,
    },
    {
      category: 'Other',
      name: 'Links',
      key: 'ls',
      url: 'https://sites.google.com/view/vamp-niklaus/home',
      color: 'linear-gradient(135deg,#000000,#FF0000)',
      icon: 'links',
      quickLaunch: true,
    },
       

    // {
    //   category: 'Other',
    //   name: 'Downloads',
    //   key: 'dl',
    //   url: 'brave://downloads/',
    //   color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
    //   icon: 'downloads',
    //   quickLaunch: true,
    // },
    // {
    //   category: 'Other',
    //   name: 'Bookmarks',
    //   key: 'b',
    //   url: 'brave://bookmarks/',
    //   color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
    //   icon: 'bookmarks',
    //   quickLaunch: true,
    // },
    // {
    //   category: 'Other',
    //   name: 'History',
    //   key: 'hy',
    //   url: 'brave://history/',
    //   color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
    //   icon: 'history',
    //   quickLaunch: true,
    // },
    // {
    //   category: 'Other',
    //   name: 'Settings',
    //   key: 's',
    //   url: 'chrome://settings/',
    //   color: 'linear-gradient(135deg, #FFF, #3F3F3F)',
    //   icon: 'settings',
    //   quickLaunch: true,
    // },
    // {
    //   category: 'Other',
    //   name: 'Translate',
    //   key: 'tr',
    //   url: 'https://translate.google.com/',
    //   search: '/#view=home&op=translate&sl=auto&tl=en&text={}',
    //   color: '#1a73e8',
    //   icon: 'translate',
    //   quickLaunch: false,
    // },
  ],

  /**
   * Get suggestions as you type.
   */
  suggestions: true,
  suggestionsLimit: 4,

  /**
   * The order and limit for each suggestion influencer. An "influencer" is
   * just a suggestion source. The following influencers are available:
   *
   * - "Commands" suggestions come from CONFIG.commands
   * - "Default" suggestions come from CONFIG.defaultSuggestions
   * - "DuckDuckGo" suggestions come from the duck duck go search api
   * - "History" suggestions come from your previously entered queries
   */
  influencers: [{
      name: 'Commands',
      limit: 2
    },
    {
      name: 'Default',
      limit: 4
    },
    {
      name: 'History',
      limit: 1
    },
    {
      name: 'DuckDuckGo',
      limit: 4
    },
  ],

  /**
   * Default search suggestions for the specified queries.
   */
  defaultSuggestions: {
    g: ['g/issues', 'g/pulls', 'gist.github.com'],
    r: ['r/r/unixporn', 'r/r/startpages', 'r/r/webdev', 'r/r/technology'],
  },

  /**
   * Instantly redirect when a key is matched. Put a space before any other
   * queries to prevent unwanted redirects.
   */
  instantRedirect: false,

  /**
   * Open triggered queries in a new tab.
   */
  newTab: false,

  /**
   * Dynamic overlay background colors when command domains are matched.
   */
  colors: true,

  /**
   * Invert color theme
   */
  invertedColors: false,

  /**
   * Show keys instead of icons
   */
  showKeys: false,

  /**
   * The delimiter between a command key and your search query. For example,
   * to search GitHub for potatoes, you'd type "g:potatoes".
   */
  searchDelimiter: ':',

  /**
   * The delimiter between a command key and a path. For example, you'd type
   * "r/r/unixporn" to go to "https://reddit.com/r/unixporn".
   */
  pathDelimiter: '/',

  /**
   * The delimiter between the hours and minutes on the clock.
   */
  clockDelimiter: ' ',

  /**
   * Show a twenty-four-hour clock instead of a twelve-hour clock with AM/PM.
   */
  twentyFourHourClock: false,

  /**
   * File extension for icon images
   */
  iconExtension: 'png'
};
