var screen = document.getElementById('screen');
var text = document.getElementById('Text');
var GenerateTextBtn = document.getElementById('GenerateText');
var Color = 'Blue';
var BackColor = 'White'
var DS = [];

var ForColor = document.getElementById('forcolor');
var BackColor = document.getElementById('backcolor');


BackColor.addEventListener('change', (e) => {
  console.log(e.target.value)
  BackColor = e.target.value;
  CreateScreen()
})

ForColor.addEventListener('change', (e) => {
  console.log(e.target.value)
  Color = e.target.value;
})

GenerateTextBtn.addEventListener('click', (e) => {
  navigator.clipboard.writeText(JSON.stringify(DS));
  alert('JSON Object has been copied to clipboard go congrats.json select all and paste it there and save file and run it.')
})

screen.addEventListener('click', (e) => {
  let Element = e.target;

  if (Element.classList.contains('box')) {
    if (Element.getAttribute('datac') == 0) {
      Element.setAttribute('datac', 1);
      AddObj(Element);
      console.log('checked');
    } else if (Element.getAttribute('datac') == 1) {
      Element.setAttribute('datac', 0);
      RemoveObj(Element);
      console.log('Un-checked');
    }
  }
});

function AddObj(Element) {
  console.log(Element.getAttribute('datax'), Element.getAttribute('datay'));
  let obj = {
    shape: 'Cube',
    color: Color,
    translate: [
      parseInt(Element.getAttribute('datax')),
      parseInt(Element.getAttribute('datay')),
      20,
    ],
    scale: [1, 1, 1],
  };

  let bool = false;
  for (let i = 0; i < DS.length; i++) {
    const element = DS[i];
    if (
      element.translate[0] == obj.translate[0] &&
      element.translate[1] == obj.translate[1]
    ) {
      bool = true;
      console.log("Updated");
      element.translate[0] = obj.translate[0];
      element.translate[1] = obj.translate[1];
    } 
  }
  if (!bool) {
    DS.push(obj);
    console.log("pushed")
  }
  Element.style.background = 'black'
}

function RemoveObj(Element) {
  for (let i = 0; i < DS.length; i++) {
    const element = DS[i];
    if (
      element.translate[0] == Element.getAttribute('datax') &&
      element.translate[1] == Element.getAttribute('datay')
    ) {
      console.log("Element Should get removed");
      DS.splice(i, 1);
      Element.style.background = 'aqua'
    }
  }
}

function CreateScreen() {
  screen.innerHTML = '';
  for (let I = 0; I < DS.length; I++) {
    DS[I].color = BackColor;
    DS[I].translate[2] = 10
    DS.scale = [1,1,1]
  }
  for (let i = 14*2; i > 0; i--) {
    for (let j = 0; j < 28*2; j++) {
      screen.innerHTML += `<div datac="${0}" dataY="${i*5}" dataX="${j*5}" class="box"></div>`;
    }
  }
  console.log('Screen Created');
}

DS = [
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      215,
      65,
      10
    ],
    "scale": [
      16,
      16,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      55,
      65,
      10
    ],
    "scale": [
      16,
      16,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      140,
      10,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      140,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      160,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      170,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      170,
      30,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      180,
      30,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      180,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      190,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      190,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      200,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      200,
      60,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      210,
      60,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      210,
      70,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      210,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      210,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      220,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      210,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      210,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      200,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      200,
      100,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      190,
      100,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      180,
      100,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      180,
      110,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      170,
      110,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      160,
      110,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      160,
      120,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      120,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      140,
      120,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      130,
      120,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      120,
      120,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      110,
      120,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      120,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      110,
      110,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      110,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      90,
      110,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      110,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      90,
      100,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      100,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      70,
      100,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      70,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      60,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      70,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      60,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      50,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Yellow",
    "translate": [
      100,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      90,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      90,
      60,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      60,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      70,
      60,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      70,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      70,
      70,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      60,
      70,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      110,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      120,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      130,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      140,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      160,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      160,
      60,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      170,
      60,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      170,
      70,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      180,
      70,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      170,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      180,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      160,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      140,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      130,
      100,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      130,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      120,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      110,
      90,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      120,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      110,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      80,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      110,
      70,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      130,
      10,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      120,
      10,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      110,
      10,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      130,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      120,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      110,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Yellow",
    "translate": [
      90,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      70,
      20,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      90,
      30,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      30,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      70,
      30,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      60,
      30,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      50,
      30,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      40,
      30,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      70,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      60,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      50,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      40,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      30,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      20,
      40,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      20,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      30,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      40,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      50,
      50,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      30,
      60,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      40,
      60,
      0
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      135,
      25,
      20
    ],
    "scale": [
      32,
      8,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      135,
      105,
      20
    ],
    "scale": [
      32,
      8,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      40,
      130,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      40,
      120,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      40,
      110,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      40,
      100,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      40,
      90,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      50,
      120,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      60,
      110,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      70,
      100,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      130,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      120,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      110,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      100,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      80,
      90,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      130,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      120,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      110,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      100,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      100,
      90,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      130,
      130,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      120,
      120,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      120,
      110,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      120,
      100,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      130,
      90,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      140,
      100,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      140,
      120,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      160,
      130,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      170,
      130,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      180,
      130,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      160,
      120,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      160,
      110,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      170,
      110,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      180,
      110,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      160,
      100,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      160,
      90,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      170,
      90,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Black",
    "translate": [
      180,
      90,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      60,
      10,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      70,
      0,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      80,
      10,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      80,
      20,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      80,
      30,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      80,
      40,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      70,
      40,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      60,
      40,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      90,
      40,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      120,
      40,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      110,
      30,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      110,
      20,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      110,
      10,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      120,
      0,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      130,
      30,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      130,
      20,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      130,
      10,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      160,
      40,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      40,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      30,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      20,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      10,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      160,
      0,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      150,
      0,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      170,
      30,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      160,
      20,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      170,
      10,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      200,
      0,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      200,
      20,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "Green",
    "translate": [
      200,
      30,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  },
  {
    "shape": "Cube",
    "color": "White",
    "translate": [
      280,
      140,
      30
    ],
    "scale": [
      1,
      1,
      1
    ]
  }
]
