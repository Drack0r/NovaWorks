## Résumé de la mission

---

### 🏢 Contexte

**Client**: NovaWorks (La Défense) - 150 collaborateurs  
**Problème**: Gestion chaotique des salles de réunion (mails, tableurs, doublons, confusion)  
**Objectif**: Application web de réservation simple, fiable et évolutive

---

### 👥 Profils utilisateurs

---

#### Employé

- ✅ Consulter disponibilités
- ✅ Créer/modifier/annuler ses réservations
- ❌ Voir détails réunions autres (juste "Occupée")

---

#### Administrateur (Office Manager/Admin IT)

- ✅ Gérer salles (CRUD)
- ✅ Accès total aux réservations
- ✅ Configuration paramètres globaux

---

### 🚀 Fonctionnalités V1

---

#### Gestion des salles (Admin)

- Création: nom, capacité, localisation, équipements
- Modification salle existante
- Désactivation (sans supprimer historique)

---

#### Réservations

- Sélection: salle + date + heure début/fin
- Titre obligatoire + notes facultatives
- Planning quotidien lisible
- Page "Mes réservations" (employé)
- Vue globale toutes salles (admin)

---

### ⚠️ Règles métier

---

#### Contraintes temporelles

- **Horaires**: 08h00 - 19h00 uniquement
- **Durée min**: 15 minutes
- **Durée max**: 4 heures
- **Aucun chevauchement** dans même salle

---

#### Permissions

- Employé: modification/annulation avant début réunion
- Admin: intervention à tout moment

---

### 🎨 Exigences UX/UI

- Interface simple, contexte entreprise
- Responsive (desktop + tablette)
- Retours utilisateur clairs (confirmations, erreurs)
- Ergonomie irréprochable > graphismes

---

### ❌ Hors scope V1

- Récurrence réservations
- Notifications email
- SSO (login simple acceptable)
- Intégrations externes
- Statistiques avancées

---

### 🎯 Objectif planning

Première version opérationnelle dans les semaines qui viennent
