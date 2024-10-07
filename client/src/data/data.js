export const data = [
    {
      "machineId": "M1",
      "name": "Coffee Machine",
      "location": "MG Road, Bengaluru",
      "lastOrder": "4:27 AM",
      "status": {
        "temperature": 80,
        "operational": false,
        "lastUpdated": "30-09-2024"
      },
      "dispensers": [
        {
          "dispenserId": "D1",
          "ingredientId": "I1",
          "ingredientName": "Coffee Beans",
          "quantity": 500,
          "capacity": 1000
        },
        {
          "dispenserId": "D2",
          "ingredientId": "I2",
          "ingredientName": "Milk",
          "quantity": 200,
          "capacity": 500
        }
      ],
      "recipes": [
        {
          "recipeId": "R1",
          "name": "Cappuccino",
          "category": "Beverages",
          "sold": 128,
          "ingredients": [
            {
              "ingredientId": "I1",
              "ingredientName": "Coffee Beans",
              "quantity": 50
            },
            {
              "ingredientId": "I2",
              "ingredientName": "Milk",
              "quantity": 100
            }
          ]
        }
      ]
    },
    {
      "machineId": "M2",
      "name": "Pizza Machine",
      "location": "Majesctic Bus Stand, Bengaluru",
      "lastOrder": "4:48 AM",
      "status": {
        "temperature": 78,
        "operational": false,
        "lastUpdated": "29-09-2024"
      },
      "dispensers": [
        {
          "dispenserId": "D3",
          "ingredientId": "I3",
          "ingredientName": "Pizza Dough",
          "quantity": 100,
          "capacity": 200
        },
        {
          "dispenserId": "D4",
          "ingredientId": "I4",
          "ingredientName": "Tomato Sauce",
          "quantity": 50,
          "capacity": 100
        },
        {
          "dispenserId": "D5",
          "ingredientId": "I5",
          "ingredientName": "Cheese",
          "quantity": 150,
          "capacity": 300
        }
      ],
      "recipes": [
        {
          "recipeId": "R2",
          "name": "Margherita Pizza",
          "category": "Fast Food",
          "sold": 98,
          "ingredients": [
            {
              "ingredientId": "I3",
              "ingredientName": "Pizza Dough",
              "quantity": 150
            },
            {
              "ingredientId": "I4",
              "ingredientName": "Tomato Sauce",
              "quantity": 70
            },
            {
              "ingredientId": "I5",
              "ingredientName": "Cheese",
              "quantity": 100
            }
          ]
        }
      ]
    },
    {
      "machineId": "M3",
      "name": "Pasta Machine",
      "location": "Koramangala, Bengaluru",
      "lastOrder": "8:22 PM",
      "status": {
        "temperature": 85,
        "operational": true,
        "lastUpdated": "01-10-2024"
      },
      "dispensers": [
        {
          "dispenserId": "D6",
          "ingredientId": "I6",
          "ingredientName": "Pasta",
          "quantity": 600,
          "capacity": 1000
        },
        {
          "dispenserId": "D7",
          "ingredientId": "I7",
          "ingredientName": "Olive Oil",
          "quantity": 100,
          "capacity": 200
        }
      ],
      "recipes": [
        {
          "recipeId": "R3",
          "name": "Spaghetti Aglio e Olio",
          "category": "Fast Food",
          "sold": 116,
          "ingredients": [
            {
              "ingredientId": "I6",
              "ingredientName": "Pasta",
              "quantity": 200
            },
            {
              "ingredientId": "I7",
              "ingredientName": "Olive Oil",
              "quantity": 50
            }
          ]
        }
      ]
    },
    {
      "machineId": "M4",
      "name": "Noodle Machine",
      "location": "Begur, Bengaluru",
      "lastOrder": "9:09 AM",
      "status": {
        "temperature": 75,
        "operational": true,
        "lastUpdated": "30-09-2024"
      },
      "dispensers": [
        {
          "dispenserId": "D8",
          "ingredientId": "I8",
          "ingredientName": "Noodles",
          "quantity": 800,
          "capacity": 1200
        },
        {
          "dispenserId": "D9",
          "ingredientId": "I9",
          "ingredientName": "Soy Sauce",
          "quantity": 150,
          "capacity": 300
        }
      ],
      "recipes": [
        {
          "recipeId": "R4",
          "name": "Chow Mein",
          "category": "Fast Food",
          "sold": 110,
          "ingredients": [
            {
              "ingredientId": "I8",
              "ingredientName": "Noodles",
              "quantity": 250
            },
            {
              "ingredientId": "I9",
              "ingredientName": "Soy Sauce",
              "quantity": 30
            }
          ]
        }
      ]
    },
    {
      "machineId": "M5",
      "name": "Ice Cream Machine",
      "location": "Magadi Road Metro, Bengaluru",
      "lastOrder": "5:01 PM",
      "status": {
        "temperature": 70,
        "operational": false,
        "lastUpdated": "27-09-2024"
      },
      "dispensers": [
        {
          "dispenserId": "D10",
          "ingredientId": "I10",
          "ingredientName": "Ice Cream Base",
          "quantity": 400,
          "capacity": 800
        },
        {
          "dispenserId": "D11",
          "ingredientId": "I11",
          "ingredientName": "Chocolate Syrup",
          "quantity": 200,
          "capacity": 500
        }
      ],
      "recipes": [
        {
          "recipeId": "R5",
          "name": "Chocolate Sundae",
          "category": "Dessert",
          "sold": 231,
          "ingredients": [
            {
              "ingredientId": "I10",
              "ingredientName": "Ice Cream Base",
              "quantity": 150
            },
            {
              "ingredientId": "I11",
              "ingredientName": "Chocolate Syrup",
              "quantity": 50
            }
          ]
        }
      ]
    },
    {
      "machineId": "M6",
      "name": "Smoothie Machine",
      "location": "Rajajinagar Metro, Bengaluru",
      "lastOrder": "7:15 PM",
      "status": {
        "temperature": 71,
        "operational": true,
        "lastUpdated": "30-09-2024"
      },
      "dispensers": [
        {
          "dispenserId": "D12",
          "ingredientId": "I12",
          "ingredientName": "Bananas",
          "quantity": 200,
          "capacity": 400
        },
        {
          "dispenserId": "D13",
          "ingredientId": "I13",
          "ingredientName": "Berries",
          "quantity": 300,
          "capacity": 500
        }
      ],
      "recipes": [
        {
          "recipeId": "R6",
          "name": "Berry Banana Smoothie",
          "category": "Dessert",
          "sold": 287,
          "ingredients": [
            {
              "ingredientId": "I12",
              "ingredientName": "Bananas",
              "quantity": 100
            },
            {
              "ingredientId": "I13",
              "ingredientName": "Berries",
              "quantity": 150
            }
          ]
        }
      ]
    },
    {
      "machineId": "M7",
      "name": "Burger Machine",
      "location": "Magadi Road Metro, Bengaluru",
      "lastOrder": "4:27 PM",
      "status": {
        "temperature": 90,
        "operational": true,
        "lastUpdated": "01-10-2024"
      },
      "dispensers": [
        {
          "dispenserId": "D14",
          "ingredientId": "I14",
          "ingredientName": "Burger Patties",
          "quantity": 200,
          "capacity": 400
        },
        {
          "dispenserId": "D15",
          "ingredientId": "I15",
          "ingredientName": "Buns",
          "quantity": 150,
          "capacity": 300
        },
        {
          "dispenserId": "D16",
          "ingredientId": "I5",
          "ingredientName": "Cheese",
          "quantity": 10,
          "capacity": 170
        }
      ],
      "recipes": [
        {
          "recipeId": "R7",
          "name": "Cheeseburger",
          "category": "Fast Food",
          "sold": 221,
          "ingredients": [
            {
              "ingredientId": "I14",
              "ingredientName": "Burger Patties",
              "quantity": 1
            },
            {
              "ingredientId": "I15",
              "ingredientName": "Buns",
              "quantity": 2
            },
            {
              "ingredientId": "I5",
              "ingredientName": "Cheese",
              "quantity": 10
            }
          ]
        }
      ]
    },
    {
      "machineId": "M8",
      "name": "Wrap Machine",
      "location": "Begur, Bengaluru",
      "lastOrder": "4:10 PM",
      "status": {
        "temperature": 70,
        "operational": true,
        "lastUpdated": "30-09-2024"
      },
      "dispensers": [
        {
          "dispenserId": "D17",
          "ingredientId": "I16",
          "ingredientName": "Wrap Bread",
          "quantity": 300,
          "capacity": 600
        },
        {
          "dispenserId": "D18",
          "ingredientId": "I17",
          "ingredientName": "Lettuce",
          "quantity": 250,
          "capacity": 400
        }
      ],
      "recipes": [
        {
          "recipeId": "R1",
          "name": "Veggie Wrap",
          "category": "Fast Food",
          "sold": 221,
          "ingredients": [
            {
              "ingredientId": "I16",
              "ingredientName": "Wrap Bread",
              "quantity": 1
            },
            {
              "ingredientId": "I17",
              "ingredientName": "Lettuce",
              "quantity": 50
            }
          ]
        }
      ]
    }
]

export const ingredientData = [
  { "ingredientId": "I1", "ingredientName": "Coffee Beans" },
  { "ingredientId": "I2", "ingredientName": "Milk" },
  { "ingredientId": "I3", "ingredientName": "Pizza Dough" },
  { "ingredientId": "I4", "ingredientName": "Tomato Sauce" },
  { "ingredientId": "I5", "ingredientName": "Cheese" },
  { "ingredientId": "I6", "ingredientName": "Pasta" },
  { "ingredientId": "I7", "ingredientName": "Olive Oil" },
  { "ingredientId": "I8", "ingredientName": "Noodles" },
  { "ingredientId": "I9", "ingredientName": "Soy Sauce" },
  { "ingredientId": "I10", "ingredientName": "Ice Cream Base" },
  { "ingredientId": "I11", "ingredientName": "Chocolate Syrup" },
  { "ingredientId": "I12", "ingredientName": "Bananas" },
  { "ingredientId": "I13", "ingredientName": "Berries" },
  { "ingredientId": "I14", "ingredientName": "Burger Patties" },
  { "ingredientId": "I15", "ingredientName": "Buns" },
  { "ingredientId": "I16", "ingredientName": "Wrap Bread" },
  { "ingredientId": "I17", "ingredientName": "Lettuce" }
]

export const recipeData = [
  {
    "recipeId": "R1",
    "name": "Cappuccino",
    "category": "Beverages",
    "sold": 128,
    "ingredients": [
      { "ingredientId": "I1", "ingredientName": "Coffee Beans", "quantity": 50 },
      { "ingredientId": "I2", "ingredientName": "Milk", "quantity": 100 }
    ]
  },
  {
    "recipeId": "R2",
    "name": "Margherita Pizza",
    "category": "Fast Food",
    "sold": 98,
    "ingredients": [
      { "ingredientId": "I3", "ingredientName": "Pizza Dough", "quantity": 150 },
      { "ingredientId": "I4", "ingredientName": "Tomato Sauce", "quantity": 70 },
      { "ingredientId": "I5", "ingredientName": "Cheese", "quantity": 100 }
    ]
  },
  {
    "recipeId": "R3",
    "name": "Spaghetti Aglio e Olio",
    "category": "Fast Food",
    "sold": 116,
    "ingredients": [
      { "ingredientId": "I6", "ingredientName": "Pasta", "quantity": 200 },
      { "ingredientId": "I7", "ingredientName": "Olive Oil", "quantity": 50 }
    ]
  },
  {
    "recipeId": "R4",
    "name": "Chow Mein",
    "category": "Fast Food",
    "sold": 110,
    "ingredients": [
      { "ingredientId": "I8", "ingredientName": "Noodles", "quantity": 250 },
      { "ingredientId": "I9", "ingredientName": "Soy Sauce", "quantity": 30 }
    ]
  },
  {
    "recipeId": "R5",
    "name": "Chocolate Sundae",
    "category": "Dessert",
    "sold": 231,
    "ingredients": [
      { "ingredientId": "I10", "ingredientName": "Ice Cream Base", "quantity": 150 },
      { "ingredientId": "I11", "ingredientName": "Chocolate Syrup", "quantity": 50 }
    ]
  },
  {
    "recipeId": "R6",
    "name": "Berry Banana Smoothie",
    "category": "Dessert",
    "sold": 287,
    "ingredients": [
      { "ingredientId": "I12", "ingredientName": "Bananas", "quantity": 100 },
      { "ingredientId": "I13", "ingredientName": "Berries", "quantity": 150 }
    ]
  },
  {
    "recipeId": "R7",
    "name": "Cheeseburger",
    "category": "Fast Food",
    "sold": 221,
    "ingredients": [
      { "ingredientId": "I14", "ingredientName": "Burger Patties", "quantity": 1 },
      { "ingredientId": "I15", "ingredientName": "Buns", "quantity": 1 },
      { "ingredientId": "I5", "ingredientName": "Cheese", "quantity": 1 }
    ]
  },
  {
    "recipeId": "R8",
    "name": "Veggie Wrap",
    "category": "Fast Food",
    "sold": 221,
    "ingredients": [
      { "ingredientId": "I16", "ingredientName": "Wrap Bread", "quantity": 1 },
      { "ingredientId": "I17", "ingredientName": "Lettuce", "quantity": 50 }
    ]
  }
]
  
export const dispenserData = [
  { "dispenserId": "D1", "ingredientId": "I1", "ingredientName": "Coffee Beans", "capacity": 1000 },
  { "dispenserId": "D2", "ingredientId": "I2", "ingredientName": "Milk", "capacity": 500 },
  { "dispenserId": "D3", "ingredientId": "I3", "ingredientName": "Pizza Dough", "capacity": 200 },
  { "dispenserId": "D4", "ingredientId": "I4", "ingredientName": "Tomato Sauce", "capacity": 100 },
  { "dispenserId": "D5", "ingredientId": "I5", "ingredientName": "Cheese", "capacity": 300 },
  { "dispenserId": "D6", "ingredientId": "I6", "ingredientName": "Pasta", "capacity": 1000 },
  { "dispenserId": "D7", "ingredientId": "I7", "ingredientName": "Olive Oil", "capacity": 200 },
  { "dispenserId": "D8", "ingredientId": "I8", "ingredientName": "Noodles", "capacity": 1200 },
  { "dispenserId": "D9", "ingredientId": "I9", "ingredientName": "Soy Sauce", "capacity": 300 },
  { "dispenserId": "D10", "ingredientId": "I10", "ingredientName": "Ice Cream Base", "capacity": 800 },
  { "dispenserId": "D11", "ingredientId": "I11", "ingredientName": "Chocolate Syrup", "capacity": 500 },
  { "dispenserId": "D12", "ingredientId": "I12", "ingredientName": "Bananas", "capacity": 400 },
  { "dispenserId": "D13", "ingredientId": "I13", "ingredientName": "Berries", "capacity": 500 },
  { "dispenserId": "D14", "ingredientId": "I14", "ingredientName": "Burger Patties", "capacity": 400 },
  { "dispenserId": "D15", "ingredientId": "I15", "ingredientName": "Buns", "capacity": 300 },
  { "dispenserId": "D16", "ingredientId": "I5", "ingredientName": "Cheese", "capacity": 170 },
  { "dispenserId": "D17", "ingredientId": "I16", "ingredientName": "Wrap Bread", "capacity": 600 },
  { "dispenserId": "D18", "ingredientId": "I17", "ingredientName": "Lettuce", "capacity": 400 }
]