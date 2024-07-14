let firstList = [
        'South',    'White',    'Red', 
        'Dusty',    'Giant',    'West',
        'Open',     'Evergreen','Lost',
        'Major',    'Knotty',   'Gusty',
        'Curvy',    'Fine',     'Hallow',
        'Soft',     'Bright',   'Minor',
        'Orange',   'Ancient',  'Deserted',
        'Abandoned','Crooked'
    ],
    secondList = [
        'TwoForks',     'Bend',     'Cambridge',
        'Badlands',     'Acadia',   'Lincoln',
        'Joshua',       'Basin',    'Burr',
        'Francisco',    'Bluestone','Redwood',
        'Yellowstone',  'Wyoming',  'Acadia',
        'Butte',        'Glacier',  'HotSpring',
        'Hamilton',     'Keween',   'Ozark'
    ], // Biscanye seems to be one (seen in a video by LGR), but I couldn't find anything that used it, so it was removed from the list
    thirdList = [
        'Crossing', 'Pond',     'Rest',
        'Path',     'Basin',    'Mesa',
        'Drive',    'Hill',     'Abyss',
        'Retreat',  'Pass',     'Terrace',
        'Cove',     'Sound',    'Vista',
        'Camp',     'Creek',    'Oaks',
        'Chasm',    'Beck',     'Valley',
        'Lake',     'Town'
    ]

// Remove duplicates from above lists
firstList = firstList.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
secondList = secondList.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
thirdList = thirdList.filter((value, index, self) => {
    return self.indexOf(value) === index;
});

let firstInput = document.getElementById('first')
let secondInput = document.getElementById('second')
let thirdInput = document.getElementById('third')

firstInput.max = firstList.length - 1
secondInput.max = secondList.length - 1
thirdInput.max = thirdList.length - 1

firstInput.min = secondInput.min = thirdInput.min = 0
firstInput.value = secondInput.value = thirdInput.value = 0

update()

function go() {
    let url = 'https://firewatch.camera/'
    url += firstList[firstInput.value]
    url += secondList[secondInput.value]
    url += thirdList[thirdInput.value]
    window.open(url, '_blank').focus();
}

function update() {
    document.getElementById('firstLabel').innerHTML = firstList[firstInput.value]
    document.getElementById('secondLabel').innerHTML = secondList[secondInput.value]
    document.getElementById('thirdLabel').innerHTML = thirdList[thirdInput.value]
}

function randomize(x) { // Randomizes the input
    switch (x) {
        case 1: firstInput.value = Math.floor(Math.random() * firstList.length); break
        case 2: secondInput.value = Math.floor(Math.random() * secondList.length); break
        case 3: thirdInput.value = Math.floor(Math.random() * thirdList.length); break
    }
    update()
}


// VALID SHIT
let validLinks = [
    'AbandonedKeweenawLake',
    'AbandonedOzarkCove',

    'AncientBendOaks',
    'AncientGlacierCrossing',
    'AncientHamiltonOaks',

    'BrightButteBend',
    'BrightGlacierBeck',
    'BrightHamiltonTown',
    'BrightRedwoodTerrace',

    'CrookedOzarkTown',

    'CurvyBadlandsRetreat',
    'CurvyFranciscoBasin',
    'CurvyGlacierValley',
    'CurvyYellowstoneCove',

    // 'DesertedBiscanyeBeck', From a video by LGR. Doesn't seem to link to anything?
    'DesertedButteCamp',
    'DesertedLincolnChasm',
    'DesertedTwoForksCrossing',

    'DustyButteCove',
    'DustyGlacierBasin',
    'DustyTwoForksRest',

    'EvergreenBadlandsHill',
    'EvergreenBasinBasin',
    'EvergreenBasinDrive',
    'EvergreenBasinVista',
    'EvergreenBendSound',
    'EvergreenGlacierRetreat',
    'EvergreenHamiltonRest',
    'EvergreenOzarkSound',
    'EvergreenWyomingPass',

    'FineAcadiaTerrace',
    'FineBadlandsCove',
    'FineCambridgeCamp',
    'FineHamiltonCreek',
    'FineWyomingSound',

    'GiantAcadiaBasin',
    'GiantBadlandsChasm',
    'GiantFranciscoHill',
    'GiantTwoForksCove',

    'GustyHotSpringVista',
    'GustyJoshuaTown',
    'GustyRedwoodTerrace',
    'GustyTwoForksCamp',

    'HallowBadlandsVista',
    'HallowHotSpringCreek',
    'HallowYellowstoneCrossing',

    'KnottyBluestonePass',

    'LostBadlandsHill',
    'LostBurrAbyss',
    'LostFranciscoTerrace',
    'LostLincolnHill',
    'LostTwoForksPass',

    'MajorBendCamp',
    'MajorBluestoneHill',
    'MajorFranciscoRetreat',
    'MajorFranciscoCove',
    'MajorJoshuaLake',
    'MajorJoshuaPond',
    'MajorRedwoodCove',
    'MajorTwoForksCrossing',

    'MinorBasinTerrace',
    'MinorBurrDrive',
    'MinorGlacierCreek',
    'MinorHamiltonPass',
    'MinorRedwoodPond',

    'OpenBasinPath',
    'OpenBendRest',
    'OpenHamiltonVista',
    'OpenHotSpringMesa',
    'OpenJoshuaMesa',
    'OpenWyomingAbyss',

    'OrangeAcadiaCrossing',
    'OrangeHotSpringCreek',

    'RedBendBasin',
    'RedBurrAbyss',
    'RedTwoForksPath',

    'SoftAcadiaCamp',
    'SoftHotSpringPond',

    'SouthBadlandsCamp',
    'SouthBurrLake',
    'SouthJoshuaMesa',
    'SouthLincolnHill',
    'SouthTwoForksCrossing',
    'SouthWyomingRetreat',

    'WestAcadiaBasin',
    'WestBadlandsPond',
    'WestBendCreek',
    'WestFranciscoCrossing',

    'WhiteAcadiaCrossing',
    'WhiteTwoForksPass',
    'WhiteYellowstoneBasin'
]

for (let i of validLinks) {
    let info = ' <span class="highlight">'
    if (i == 'EvergreenBasinDrive' || i == 'BrightButteBend') { // custom
        info += '(custom) '
    }
    if (i == 'OpenBasinPath' || i == 'WhiteYellowstoneBasin' || i == 'AncientHamiltonOaks' // Empty
        || i == 'WestBendCreek' || i == 'GiantFranciscoHill'
    ) {
        info += '(empty) '
    }
    if (i == 'EvergreenBasinBasin') { // weird or funny names
        info += '(weird naming convention) '
    }
    if (i == 'CurvyBadlandsRetreat' || i == 'CurvyYellowstoneCove' || i == 'EvergreenBasinBasin' // the spot
        || i == 'EvergreenBendSound' || i == 'FineCambridgeCamp' || i == 'GustyTwoForksCamp' || i == 'HallowBadlandsVista'
        || i == 'LostBurrAbyss' || i == 'LostFranciscoTerrace' || i == 'LostLincolnHill' || i == 'MajorFranciscoCove'
        || i == 'MajorJoshuaPond' || i == 'MajorTwoForksCrossing' || i == 'MinorGlacierCreek' || i == 'OpenWyomingAbyss'
        || i == 'OrangeHotSpringCreek' || i == 'SoftAcadiaCamp' || i == 'WestBadlandsPond' || i == 'OrangeAcadiaCrossing'
        || i == 'DustyGlacierBasin' || i == 'OpenBasinRests' || i == 'MinorBasinTerrace' || i == 'FineWyomingSound'
        || i == 'FineHamiltonCreek' || i == 'BrightRedwoodTerrace' || i == 'SoftHotSpringPond' || i == 'SouthTwoForksCrossing'
        || i == 'MajorBendCamp' || i == 'MinorHamiltonPass' || i == 'CurvyFranciscoBasin' || i == 'GiantAcadiaBasin'
        || i == 'AbandonedKeweenawLake' || i == 'CrookedOzarkTown' || i == 'MajorJoshuaLake' || i == 'AbandonedOzarkCove'
        || i == 'LostTwoForksPass' || i == 'OpenHamiltonVista' || i == 'EvergreenOzarkSound'
    ) {
        info += '(the spot) '
    }
    if (i == 'EvergreenGlacierRetreat') { // multiple of the same image
        info += '(multiple of the same image) '
    }

    info += '</span>'
    document.getElementById('valids').innerHTML += `<a href="https://firewatch.camera/${i}">${i}${info}</a><br>`
}

function randomValid() {
    let url = 'https://firewatch.camera/'
    url += validLinks[Math.floor(Math.random()*validLinks.length)]
    window.open(url, '_blank').focus();
}