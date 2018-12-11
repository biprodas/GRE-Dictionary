const initState = {
    magooshWords: [
      { 
        id: '1', 
        word: 'aberrant', 
        type: 'adj',
        meaning:  'বিপথগামী, নীতিভ্রষ্ট, অস্বাভাবিক',
        definition: 'markedly different from an accepted norm',
        details: '',
        example: 'When the financial director started screaming and throwing food at his co-workers, the police had to come in to deal with his aberrant behavior.',
        synonym: '',
        tags: ''
      },
      { 
        id: '2', 
        word: 'aberration', 
        type: 'noun',
        meaning: 'বিপথগমন, বিচ্যুতি',
        definition: 'a deviation from what is normal or expected',
        details: '',
        example: 'Aberrations in climate have become the norm: rarely a week goes by without some meteorological phenomenon making headlines.',
        synonym: '',
        tags: ''
      },
      { 
        id: '3', 
        word: 'abstain', 
        type: 'verb',
        meaning: 'বিরত থাকা, পরিহার করা',
        definition: 'choose not to consume or take part in (particularly something enjoyable)',
        details: '',
        example: 'Considered a health nut, Jessica abstained from anything containing sugar--even chocolate.',
        synonym: '',
        tags: ''
      },
      { 
        id: '4', 
        word: 'abstruse', 
        type: 'adj',
        meaning: 'দুর্বোধ্য, গুপ্ত',
        definition: 'difficult to understand; incomprehensible',
        details: '',
        example: 'Physics textbooks can seem so abstruse to the uninitiated that readers feel as though they are looking at hieroglyphics.',
        synonym: '',
        tags: ''
      },
      { 
        id: '5', 
        word: 'accolade', 
        type: 'noun',
        meaning: 'প্রশংসা, অনুমোদন',
        definition: 'an award or praise granted as a special honor',
        details: '',
        example: 'Jean Paul-Sartre was not a fan of accolades, and as such, he refused to accept the Nobel Prize for Literature in 1964.',
        synonym: '',
        tags: ''
      },
      { 
        id: '6', 
        word: 'acerbic', 
        type: 'adj',
        meaning: 'তিক্ত, কটু, রুক্ষ',
        definition: 'harsh in tone',
        details: '',
        example: 'Most movie critics are acerbic towards summer blockbusters, often referring to them as garbage.',
        synonym: '',
        tags: ''
      },
      { 
        id: '7', 
        word: 'acrimony', 
        type: 'noun',
        meaning: 'উগ্রতা, মেজাজ, স্বভাব কটুতা',
        definition: 'bitterness and ill will',
        details: '',
        example: 'The acrimonious dispute between the president and vice-president sent a clear signal to voters: the health of the current administration was imperiled.',
        synonym: '',
        tags: ''
      }
    ]
  }
  
  const magooshReducer = (state = initState, action) => {
    return state;
  };
  
  export default magooshReducer;