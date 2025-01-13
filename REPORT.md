# Project Report

## Étapes Suivies

### 1. Initialisation du Projet
- Création d'un dépôt Git.
- Installation des dépendances nécessaires via `npm install`.
- Mise en place de la structure initiale du projet avec des composants React.

### 2. Conception de l'Interface Utilisateur
- Création d'un titre interactif avec un chapeau de Noël positionné dynamiquement.
- Ajout d'une image de fond et d'un effet de flocons de neige pour améliorer l'esthétique.
- Intégration d'un bouton pour basculer entre le mode clair et le mode sombre, avec un menu de navigation.

### 3. Gestion des Participants
- Mise en place d'une liste interactive permettant d'ajouter et de supprimer des participants.
- Ajout d'un bouton pour générer aléatoirement les paires du "Secret Santa".

### 4. Tests Locaux
- Lancement du projet en local pour tester les fonctionnalités via `npm start`.
- Résolution des problèmes liés aux chemins d'accès pour les fichiers d'images.

---

## Difficultés Rencontrées

### 1. Gestion des Dépendances
- **Problème** : Erreur lors du lancement de `npm start` avec un message "`react-scripts` n'est pas reconnu".
  - **Solution** : Réinstallation des dépendances via `npm install`.

### 2. Images Non Chargées
- **Problème** : Les fichiers d'images dans le dossier `public` n'étaient pas accessibles via les chemins définis.
  - **Solution** : Utilisation correcte du chemin relatif `/images/` et vérification de la structure des fichiers.

### 3. Conflits Git
- **Problème** : Inclusion accidentelle d'un sous-répertoire Git dans le projet principal, entraînant des erreurs lors des commits.
  - **Solution** : Suppression du sous-dépôt avec la commande `git rm --cached`.

### 4. Alignement du Titre
- **Problème** : Un espace inattendu apparaissait entre la lettre "S" et le reste du mot "Secret".
  - **Solution** : Ajout de styles CSS spécifiques pour corriger l'espacement et le positionnement du chapeau.

---

## Prochaines Étapes
- Optimisation du code pour une meilleure lisibilité et maintenabilité.
- Amélioration de la compatibilité mobile.
- Ajout de tests unitaires pour garantir la stabilité des fonctionnalités.

