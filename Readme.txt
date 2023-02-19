Pour lancer le backend, if faut creer un fichier .env avec le contenu suivant:

ACCESS_KEY=My_Access_Key_That_No_One_Knows_12345


il faut executer la fonction d'installation des packages necessaires de nodeJS

npm i


et pour lancer le serveur backend il faut executer

npx ts-node index.ts

Le backend fonctionne avec l'option de filtrage des mots pour les commentaires, l'AI de text to voice fonctionne sur un serveur python séparé, l'implementation était difficile, et pour le modéle de génération de photo du thumbnail, l'API utilisé a des problémes de latence de plus que 10sec alors les images ne sont pas traité rapidement pour l'ajout dans la base, mais tous les apis sont testé séparament dans notre espace de test d'APIs Postman