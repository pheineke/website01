import requests
r = requests.get("https://131.246.119.65:55555/new")
print(r.text)
test = requests.post("https://131.246.119.65:55555/new", "Hallo")
print(test.text)