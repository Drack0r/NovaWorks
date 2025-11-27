## Objet : Besoin de développer une application interne de réservation de salles – Demande de cadrage

---

Bonjour,

Je me permets de revenir vers vous concernant le projet que nous souhaitons lancer chez NovaWorks, notre société située à La Défense et composée d’environ 150 collaborateurs.

Nous rencontrons depuis quelque temps un problème récurrent : la gestion de nos salles de réunion est devenue chaotique. Entre les réservations par mail, les tableurs partagés et les malentendus entre équipes, nous nous retrouvons avec des salles bloquées “pour rien”, des doublons de réservations ou, inversement, des salles libres qui semblent occupées.

Nous aimerions donc mettre en place une application interne de réservation, simple d’utilisation, fiable et suffisamment flexible pour évoluer dans le temps. Voici les attentes principales pour cette V1 :

---

#### 🎯 Objectif général

Créer une application web permettant à nos équipes de :

- Consulter la disponibilité de nos salles,
- Réserver facilement un créneau,
- Éviter les conflits de planification,
- Offrir aux managers et au service Office Management une vue globale de l’utilisation des espaces.

---

#### 👥 Profils utilisateurs

Nous souhaitons distinguer deux types d’utilisateurs :

1. Employé

- Consulte les disponibilités
- Crée, modifie ou annule ses propres réservations
- Ne voit pas les détails des réunions des autres utilisateurs (juste “Occupée”)

2. Administrateur (Office Manager / Admin IT)

- Gère la liste des salles (création, modification, désactivation)
- Accède à toutes les réservations, peut les modifier ou annuler
- Peut configurer quelques paramètres globaux (ex : horaires d’ouverture)

---

#### 🗂️ Fonctionnalités attendues

1. Gestion des salles (admin)

   - Création d’une salle avec nom, capacité, localisation, équipements
   - Modification d’une salle existante
   - Désactivation d’une salle sans supprimer son historique

2. Réservations
   - Choix d’une salle, date, heure de début et fin (ou durée)
   - Titre obligatoire, notes facultatives
   - Affichage dans un planning quotidien clair et lisible
   - Page “Mes réservations” pour l’employé
   - Coté admin : vue globale de toutes les salles pour un jour donné

---

#### ⛔ Règles métier obligatoires

- Aucun chevauchement de créneaux dans une même salle
  → Si un créneau est déjà pris, l’utilisateur doit être informé clairement.
- Réservations uniquement entre 08:00 et 19:00
- Durée :
  - Minimum : 15 minutes
  - Maximum : 4 heures
- Un employé peut modifier/annuler seulement avant le début de la réunion
  (Un admin peut intervenir à tout moment)

---

#### 🧭 UX & interface

Nous attendons une interface :

- Simple, rapide à comprendre, adaptée au contexte “entreprise”
- Responsive (desktop + tablette)
- Avec retours utilisateurs clairs (confirmation, erreurs, indisponibilité, etc.)

Pas besoin de graphismes complexes pour le moment, mais l’ergonomie doit être irréprochable.

---

#### 🔒 Ce que nous ne voulons pas encore (pour la V1)

- Pas de récurrence de réservations
- Pas de notifications email
- Pas de connexion via SSO pour l’instant (login simple ou simulation possible)
- Pas d’intégrations externes

L’idée est d’avoir une base solide, évolutive, sur laquelle nous pourrons ajouter des modules dans un second temps (statistiques, récurrence, notifications, etc.).

---

#### 📅 Prochaine étape

Pouvez-vous revenir vers moi avec :

1. Un découpage en fonctionnalités prioritaires (MVP)
2. Les grandes étapes du développement
3. Une estimation du planning souhaité

L’objectif serait d’avoir une première version opérationnelle dans les semaines qui viennent.

Merci d’avance pour votre retour,
Et n’hésitez pas si vous avez besoin de précisions supplémentaires.

Bien cordialement,
Marc Lenoir
Responsable des Opérations
NovaWorks
