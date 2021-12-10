# Dr. Cinema!
Dr. Cinema! uses https://api.kvikmyndir.is to give users a view of all cinemas in Iceland, movies being shown and upcoming to those theaters.
Users can choose to view movies with regards to which theatre is showing it, or just browse all movies, filter by genres and even buy tickets.

## Requirements
npm
expo-cli

## Installing
```
git clone git@github.com:creep1g/dr-cinema-mapp-2021
cd dr-cinema-mapp-2021
npm install package.json
expo install
expo start

```
## Known Bugs
- Every now and then response from the API does not seem to be delivered in time, when this happens the view that does not get a response is blank
- Since the data is inconsistent some movies might have different posters from one view to the next.

## Demo
### Cinema list and Cinema Movie List
![gifcast_211210095248](https://user-images.githubusercontent.com/45407193/145554594-1c87ba07-421b-4c24-ad2a-587080ec7cd4.gif) <br/>
### Cinema Details and Buttons
![gifcast_211210095335](https://user-images.githubusercontent.com/45407193/145554601-ed8157a5-2fb8-4f46-91f9-a0e5ec228eff.gif) <br/>
### Movie Details From Selected Cinema
![gifcast_211210095518](https://user-images.githubusercontent.com/45407193/145554819-003c75b8-162b-4cf2-88bf-8b9500fe8b83.gif) <br/>
### Upcoming Movies Details
![gifcast_211210095609](https://user-images.githubusercontent.com/45407193/145554923-13e85f0a-00f9-4499-a326-a43bcf191540.gif) <br/>
### Browse Movies Genre Filter
![gifcast_211210095646](https://user-images.githubusercontent.com/45407193/145555106-6d820898-aa22-4cc4-bcbc-54536358c890.gif) <br/>
