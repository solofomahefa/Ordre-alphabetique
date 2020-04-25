/// 1) Afficher dans l'ordre alphabétique "lastname"
// 2) Afficher dans un tableau HTML basique dans l'ordre alphabétique

let arr = [
{
        "lastname": "Zansens",
        "firstname": "Dark"
    },
{
        "lastname": "Calivu",
        "firstname": "Dreso"
    },
{
        "lastname": "Harmer",
        "firstname": "Garrt"
    },
{
        "lastname": "Jack",
        "firstname": "Sparow"
    },
{
        "lastname": "Spark",
        "firstname": "Mikel"
    },
{
        "lastname": "Arteta",
        "firstname": "Franck"
    },

];

//Tri dans l'ordre croissant de lastname
let croissant = arr;
for(i = 0; i <croissant.length; i++){
	for(j = i+1; j<croissant.length; j++){

		if(croissant[i].lastname > croissant[j].lastname){

			let tampon = croissant[j];
			croissant[j] = croissant[i];
			croissant[i] = tampon;


		}
	}
}

console.log("Tri dans l ordre croissant");
console.log(croissant);

