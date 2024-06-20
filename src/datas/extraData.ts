export const langList = [
  { value: 'CHS', text: '简体中文' },
  { value: 'CHT', text: '繁體中文' },
  // { value: 'DE', text: 'Deutsch' },
  // { value: 'EN', text: 'English' },
  // { value: 'ES', text: 'Español' },
  // { value: 'FR', text: 'Français' },
  // { value: 'ID', text: 'English' },
  { value: 'JP', text: '日本語' },
  // { value: 'KR', text: 'English' },
  // { value: 'PT', text: 'English' },
  // { value: 'RU', text: 'English' },
  // { value: 'TH', text: 'English' },
  // { value: 'VI', text: 'English' },
];

export const TEXTJOIN_HASH_MAP = {

  // 以太战线 以太灵 次元扑满的命名
  54: [
    -262052143,
    -262052144,
    -262052141,
    -262052142,
    -262052147,
    -262052148,
    -262052145,
    -262052146,
  ],
  // 晖长石号 的命名
  87: [
    141232019,
    141232020,
    141232021,
    141232022,
  ],
};

// 处理分支成就
export const ACHIEVEMENT_GROUP_Map: Record<number, number[][] | undefined> = {

  // 通往群星的轨道 SeriesID = 3
  3: [
    // 2.2 主线，在「巨星巅峰战」中说服/击败银枝
    [4033205, 4033206],

    // 2.3 主线，为逝者干杯，敬苦涩的现实/敬甜蜜的明天
    [4033301, 4033302],

    // 2.3 主线，流萤视角下，在晖长石号上看到列车组/专注于寻找「慈玉典押」
    [4033303, 4033304],
  ],

  // 与你同行的回忆 SeriesID = 5
  5: [
    // 陶德
    [4052613, 4052614],

    // 任务「譬如朝露」
    [4052401, 4052402],

    // 同行任务「陌生女人的来信」
    [4052507, 4052511],

    // 任务「难得有情•其二」
    [4051110, 4051111],

    // 任务「仙舟追爱记」
    [4052325, 4052326, 4052327],

    // 仙舟罗浮大胃王比赛
    [4052330, 4052331, 4052332],

    // 罐中仙
    [4052333, 4052334],

    // 奇怪的游客向星槎引擎扔硬币
    [4052338, 4052339],

    // 造物引擎的策划案
    [4052714, 4052715],

    // 碰瓷者
    [4052340, 4052341, 4052342],

    // 星可梦结局
    [4052718, 4052719],

    // 把造物工程的废料交给本杰明/佩拉
    [4052724, 4052725],

    // 格律诗人的挑战
    [4052504, 4052505],

    // 丹枢相关任务（任务流程大改的产物，通常的ID会是连续的）
    [4032309, 4052510],

    // 与鬼伶合唱一曲《合巹记》
    [4052815, 4052816],

    // 在文远和若昔的苦苦哀求中，坚持带走岁阳/选择放过岁阳
    [4052820, 4052821],

    // 与宝烛畅游罗浮之后，将它放归宇宙/封入镇妖塔
    [4052822, 4052823],

    // 在「罗浮杂俎」网站上发布帖子
    [4052806, 4052807, 4052808, 4052809],

    // 在禁闭舱段选择亲自登上「王座」/扶洞悉者登上「王座」
    [4052903, 4052904],

    // 在《想象一朵未来的玫瑰》任务中选择放手/不放手
    [4053002, 4053003],

    // 水晶杯与三瓶酒
    [4053020, 4053021, 4053022],

    // 奥克萨娜任务分支
    [4053061, 4053062, 4053063],

    // 拍照打卡
    [4053070, 4053071],

    // 奥尔拉，筑梦诗
    [4053206, 4053207],
  ],

  // 瞬息欢愉 SeriesID = 8
  8: [
    // 在获得晖长石号所有权之前/之后，在泳池中冲刺玩水
    [4053321, 4083301],
  ],
};