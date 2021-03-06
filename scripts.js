//this is some great text

console.log('Hey I am here!!');

let catFacts = [
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e008800aac31001185ed07",
        "user": "58e007480aac31001185ecef",
        "text": "Wikipedia has a recording of a cat meowing, because why not?",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-03-06T21:20:03.505Z",
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e008630aac31001185ed01",
        "user": "58e007480aac31001185ecef",
        "text": "When cats grimace, they are usually \"taste-scenting.\" They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-02-07T21:20:02.903Z",
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e00a090aac31001185ed16",
        "user": "58e007480aac31001185ecef",
        "text": "Cats make more than 100 different sounds whereas dogs make around 10.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-02-11T21:20:03.745Z",
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e009390aac31001185ed10",
        "user": "58e007480aac31001185ecef",
        "text": "Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-03-04T21:20:02.979Z",
        "used": false
    },
    {
        "status": {
            "verified": true,
            "sentCount": 1
        },
        "type": "cat",
        "deleted": false,
        "_id": "58e008780aac31001185ed05",
        "user": "58e007480aac31001185ecef",
        "text": "Owning a cat can reduce the risk of stroke and heart attack by a third.",
        "__v": 0,
        "source": "user",
        "updatedAt": "2020-08-23T20:20:01.611Z",
        "createdAt": "2018-03-29T20:20:03.844Z",
        "used": false
    }
]

let completeBudsArray = [ {
    catNumber: 2,
    favoriteColor: "blue",
    firstName: "George",
    lastName: "Holthus"
  },  {
    catNumber: 1,
    favoriteColor: "green",
    firstName: "Krysty",
    lastName: "Sickler"
  },  {
    catNumber: 3,
    favoriteColor: "maroon",
    firstName: "Leila",
    lastName: "Tatby"
  },  {
    catNumber: 4,
    favoriteColor: "yellow",
    firstName: "Myeisha",
    lastName: "Essex"
  },  {
    catNumber: 0,
    favoriteColor: "pink",
    firstName: "James",
    lastName: "Goedert"
  },  {
    catNumber: 5,
    favoriteColor: "pink",
    firstName: "Jane",
    lastName: "Doe"
  }];


  let ul = document.createElement('ul');

  document.getElementById('budsList').appendChild(ul);

  for (let i = 0; i < completeBudsArray.length; i++){
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += `${completeBudsArray[i].firstName} ${completeBudsArray[i].lastName}'s favorite color is ${completeBudsArray[i].favoriteColor}, and they know that ${completeBudsArray[i].catNumber}   `;

  }