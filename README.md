# Komplettering Backend med Node.js

## Introduktion
Detta är en kompletteringsuppgift för er som inte lyckats nå betyget godkänt i kursen Backend med Node.js. Uppgiften är byggd som en så kallad trappa, vilken består av ett antal steg. I samband med att jag skickar ut uppgiften kommer jag att förtydliga hur många steg ni förväntas ta för att nå betyget godkänt.

## Uppgift
I detta arbete ska ni skapa ett API för webbappen Airbean där kunder skall kunna beställa kaffe och få den levererad via drönare. I stegen nedan finner ni den data och de endpoints som måste fungera för ett godkänt betyg. NOTERA att ni måste förhålla er till de endpoints och den data som specificeras nedan, det är inte tillåtet att avvika från denna specifikation. NOTERA även att användande av AI för att skriva kod är strängt förbjudet, och en kunskapskontroll för att säkerställa att det är du som skrivit koden kan förekomma.

## Steg 1
Skapa en server med Node och Express, som använder sig av ES6-moduler. Servern skall lyssna på port 8080. Skapa mapparna *routes* (där ni sedan lägger alla era routes-filer), *middlewares* (där ni sedan lägger era middleware-filer), *models* (där ni lägger era validerings-filer), *services* (där ni hanterar era databas-filer). Alla anrop som tar emot data i bodyn måste valideras med hjälp utav middleware och schema. Vid alla anrop skall ett response-objekt returneras med rimlig data/information.

## Steg 2
Skapa databashantering i filen menu.db. Använd er av ett insert-anrop för att lägga till menyn instället för att hårdkoda in den vilket kan resultera i en korrupt fil. 
Skapa en route där jag kan hämta menyn på följande endpoint:
```
POST http://localhost:8080/api/auth/register
```
## Steg 3
Skapa databashantering i filen orders.db. Här skall endast den slutgiltiga, bekräftade ordern sparas. Kundvagnen är endast en temporär förteelse, så den kan vi hantera i en array till vidare.

### Hämta alla ordrar
Skapa en route som hämtar alla ordrar som finns i databasen på följande endpoint:
```
GET http://localhost:8080/api/orders
```

### Hämta kundvagn

Skapa en route där jag kan hämta min kundvagnsarray på följande endpoint:
```
GET http://localhost:8080/api/orders/cart/
```

### Lägg till produkt i kundvagn
Skapa en route där jag kan lägga till en produkt i min kundvagnsarray på följande endpoint:
```
POST http://localhost:8080/api/orders/cart/<product-id>
```

### Bekräfta order
Skapa en route som skapar upp en order beståendes av mitt kundID (om man är inloggad), samt produkterna i min cart-array. Spara ner datan i orders.db. Se även till att tömma cart-arrayen efter att en order lagts.
```
POST http://localhost:8080/api/orders/confirm
```

## Steg 4
Skapa databashantering i filen users.db. Vid registrering skall en ny användare läggas till i databasen, och vid inloggning så skall en kontroll göras för att se om användaren existerar i databasen.

### Registrera användare
Skapa en route där jag kan registrera mig som användare på följande endpoint
```
POST http://localhost:8080/api/auth/register
```
Anropet tar följande data i body:
```
{
	"username" : "Jesper",
	"password" : "jesper123",
  	"role" : "guest"
}
```
### Logga in användare
Skapa en route där jag kan logga in på följande endpoint:
```
POST http://localhost:8080/api/auth/login
```
Anropet tar följande data i body:
```
{
	"username" : "Jesper",
	"password" : "jesper123"
}
```

## Steg 5
Skapa funktionalitet för att söka efter ordrar kopplade till en specifik användare,

### Hämta alla användare
Skapa en route där jag kan hämta alla användare på följande endpoint:
```
GET http://localhost:8080/api/auth/users
```

### Hämta orderhistorik för användare
Skapa en route som hämtar alla ordrar som gjorts av en specifik användare på följande endpoint: 
```
GET http://localhost:8080/api/orders/<användar-id>
```
