# 🌙 Ramadan 2026 - Dakar, Sénégal

Application Next.js qui affiche automatiquement les heures du Ramadan pour Dakar, Sénégal.

## Fonctionnalités

- ✅ **Mise à jour automatique** : Le jour affiché change automatiquement à minuit
- ⏱️ **Compte à rebours en direct** : Temps restant avant Fin Xeud et Dogg
- 📅 **Calendrier complet** : Tous les 30 jours consultables sur `/calendrier`
- 🌙 **Compte à rebours** : Avant le début du Ramadan (19 février 2026)
- 🎉 **Message de fin** : Après le Ramadan avec Eid Mubarak
- 🎨 **Design élégant** : Thème nuit étoilée avec croissant de lune animé

## Installation

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## Pages

| URL | Description |
|-----|-------------|
| `/` | Jour actuel (mis à jour automatiquement) |
| `/calendrier` | Calendrier complet des 30 jours |

## Déploiement

### Vercel (recommandé - GRATUIT)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Déploie le dossier .next
```

## Comment ça marche

La logique principale est dans `src/lib/ramadanData.ts` :

1. `RAMADAN_START` = 19 février 2026
2. `getCurrentRamadanDay()` calcule la différence entre aujourd'hui et le début du Ramadan
3. La page se revalide toutes les heures (`revalidate = 3600`)
4. Les composants client (`LiveTimer`, `Countdown`) utilisent `useEffect` pour le temps réel

## Données

Source : **Imam Serigne Moustapha Bousso Bakher Guédé**
Réalisation : **DAAHIRA SOULLAMOUL WOUSSOOLLE**
