var data = {
  "Zuckerberg": {
    "Schroepfer": {
      "Bosworth": {
        "Steve": {},
        "Kyle": {},
        "Andra": {}
      },
      "Zhao": {
        "Richie": {},
        "Sofia": {},
        "Jen": {}
      },
      "Badros": {
        "John": {},
        "Mike": {},
        "Pat": {}
      },
      "Parikh": {
        "Zach": {},
        "Ryan": {},
        "Tes": {}
      }
    },
    "Schrage": {
      "VanDyck": {
        "Sabrina": {},
        "Michelle": {},
        "Josh": {}
      },
      "Swain": {
        "Blanch": {},
        "Tom": {},
        "Joe": {}
      },
      "Frankovsky": {
        "Jasee": {},
        "Brian": {},
        "Margaret": {}
      }
    },
    "Sandberg": {
      "Goler": {
        "Eddie": {},
        "Julie": {},
        "Annie": {}
      },
      "Hernandez": {
        "Rowi": {},
        "Inga": {},
        "Morgan": {}
      },
      "Moissinac": {
        "Amy": {},
        "Chuck": {},
        "Vinni": {}
      },
      "Kelley": {
        "Eric": {},
        "Ana": {},
        "Wes": {}
      }
    }
  }
};

var data2 = {
  name: "Zuckerberg",
  reports: [
    {
      name: "Schroepfer",
      reports: [
        {
          name:"Bosworth",
          reports: [
            {
              name:'Steve'
            },
            {
              name:'Kyle'
            },
            {
              name:'Andra',
              reports: [
                {
                  name:'Amy'
                },
                {
                  name:'Chuck'
                },
                {
                  name:'Vinni'
                }
              ]
            }
          ]
        },
        {
          name:"Kirkland",
          reports: [
            {
              name:'Dom'
            },
            {
              name:'Keefer'
            },
            {
              name:'Maggie',
              reports: [
                {
                  name:'Bryan'
                },
                {
                  name:'Todd'
                },
                {
                  name:'Dan'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Warner",
      reports:[
        {
          name:"Denver",
          reports: [
            {
              name:'Dave'
            },
            {
              name:'Elizabeth'
            },
            {
              name:'Diane',
              reports: [
                {
                  name:'Frank'
                },
                {
                  name:'Stan'
                },
                {
                  name:'Roy'
                }
              ]
            }
          ]
        },
        {
          name:"Jabobs",
          reports: [
            {
              name:'Nicholas'
            },
            {
              name:'Alicia'
            },
            {
              name:'Alexander',
              reports: [
                {
                  name:'Jon'
                },
                {
                  name:'William'
                },
                {
                  name:'Paul'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
