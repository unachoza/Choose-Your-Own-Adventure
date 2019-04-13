
const questionsArray = [
    { nameQ: 'What is your name?' },
    { residencyQ: 'Congradulations! You\'ve just been accepted into Harvard Medical School!! [You know this is a big time commitment and your trying to figure out how many years of residency you can endure after Med School. How long will your residency be? (0-7 years?)' },
    { specializationQ: 'What do you want to specialize in?' },
    { brainSurgenQ: 'Wow 7 years later, and you have become a Brain Surgeon, nice work. Time to decide which Hospital at which you will be Practicing Medicine?' },
    { lenoxHillQ: ' Welcome to New York! You\'ve just moved to the city it\'s your first day at your new hospital and you\'re pumped. Two hours later a patient comes in with head trama. Do you jump in right away? Or advise another doctor take this patient until you have settled in your new surroundings?' },
    { jumpQ: 'Head trama was putting it lightly. This patient suffered a gunshot wound to the head and you must remove the bullet that is lodged in the frontal cortex. Luckly you\'ve had the best training and totally excute the surgey with confidence! The patient is so thrilled and thankful, they ask for a selfie with you. Take the picture and the glory? or stay humble and anonymous?' },
    { skipQ: 'You\'d like to take your time and get to know your surrounds and colleagues before jumping into surgery. Good call, you are still a bit tired from the move and want to be sharp and well rested when someone\'s life is in your hands! Next day you have your first procudure a simple biopsy. The operation is a success, as is every surgury that follows. You become  quite successful and well regarded Surgeon. You get the opportunity to teach. Do you take it?' },
    { massGeneralQ: 'Welcome to Boston! Cogradulations you have been offered a position as designated Brain Specialist to the New England Patriots Football Team. Do you take the position and season tickets?' },
    { obgynQ: 'How quickly 4 years have gone by! You are now an OBGYN! You have some options of where you are able to practice medicine. Options include:' },
    { laQ: 'Sunny Southern California, and the livings easy. LA is very trendy. The current trend is away from hospital births and medical intervention and towards homebirths and midwives. You have the opportunity to team up with some midwives. Do you leave the hospital to go practice low key hippy medicine? Or stay in your sterilized medical enviorment where you are most comfortable?' },
    { onchologyQ: 'Your brother died of lukemia when you were 20 so obviously you choose onchologoy. It was a lot of hard work but totally worth it know how many people you will be able to help at such a vulnerable time in their lives. Do you move back to your home town to be close to family? Or do you move to New York City to work at the Cancer Research Institue?' }
    
]

const choiceArray = [ studyLengthChoice =
    {
        studyOption1: '1 year',
        studyOption2: '2 year',
        studyOption3: '3 year',
        studyOption4: '4 year',
        studyOption5: '5 year',
        studyOption6: '6 year',
        studyOption7: '7 year'
    },
    specializationChoice =
    {
        specialistOption1: 'Brain Surgury',
        specialistOption2: 'Onchology',
        specialistOption3: 'OBGYN'
    },
    locationChoice = {
        location1: 'New York',
        location2: 'Boston',
        location3: 'Los Angeles',
        location4: 'Seattle',
        location5: 'Home Town',
        location6: 'Reserach'
    },
    onLocationChoices = {
        newYork1: 'Jump',
        newYork2: 'Skip',
        newYork3: 'Glory',
        newYork4: 'Anonymous',
        boston1: 'Yes',
        boston2: 'No',
        losAngles1: 'Midwifery',
        losAngles2: 'Stay'
    }
]

const decisionArray = []

