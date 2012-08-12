lineate
=======

Prints objects in object illiteral form

![](http://i.imgur.com/aEX9b.jpg)


Get it:
```
npm install lineate
```


Usage:

```js
var lineate = require('lineate');

lineate({
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
					{ "id": "1003", "type": "Blueberry" },
					{ "id": "1004", "type": "Devil's Food" }
				]
		},
	"topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
			{ "id": "5007", "type": "Powdered Sugar" },
			{ "id": "5006", "type": "Chocolate with Sprinkles" },
			{ "id": "5003", "type": "Chocolate" },
			{ "id": "5004", "type": "Maple" }
		]
});
```

Output:
```
root.id = "0001"
root.type = "donut"
root.name = "Cake"
root.ppu = 0.55
root.batters = {}
root.batters.batter = []
root.batters.batter[0] = {}
root.batters.batter[0].id = "1001"
root.batters.batter[0].type = "Regular"
root.batters.batter[1] = {}
root.batters.batter[1].id = "1002"
root.batters.batter[1].type = "Chocolate"
root.batters.batter[2] = {}
root.batters.batter[2].id = "1003"
root.batters.batter[2].type = "Blueberry"
root.batters.batter[3] = {}
root.batters.batter[3].id = "1004"
root.batters.batter[3].type = "Devil's Food"
root.topping = []
root.topping[0] = {}
root.topping[0].id = "5001"
root.topping[0].type = "None"
root.topping[1] = {}
root.topping[1].id = "5002"
root.topping[1].type = "Glazed"
root.topping[2] = {}
root.topping[2].id = "5005"
root.topping[2].type = "Sugar"
root.topping[3] = {}
root.topping[3].id = "5007"
root.topping[3].type = "Powdered Sugar"
root.topping[4] = {}
root.topping[4].id = "5006"
root.topping[4].type = "Chocolate with Sprinkles"
root.topping[5] = {}
root.topping[5].id = "5003"
root.topping[5].type = "Chocolate"
root.topping[6] = {}
root.topping[6].id = "5004"
root.topping[6].type = "Maple"

```

`lineate(...)` can also take multiple arguments. It will lineate all of them, seperated by newline!


Happy hacking.