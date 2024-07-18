// Soit le tableau var mois = [ 'janvier', février, mars, avril, mai, juin, juillet ];

var mois = [ 'janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet' ];
alert(mois.join('**'));

// 1. Retirer le dernière valeur du tableau mois

mois.pop();

// 2. Afficher les valeurs du tableau en utilisant la méthode document.write
document.write(mois.join('-'));


// 3.Ajouter la valeur ‘août’ à la fin du tableau
mois.push('Aout');

// 4.Remplacer la valeur 'février' par ‘février’
mois[1]= 'FEVRIER';

// 5.Afficher le nombre de valeurs du tableau en utilisant la méthode document.write
document.write(mois.length)

// 6.Afficher la troisième valeur du tableau
document.write(mois[2])