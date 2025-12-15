#  Personal Health Tracker App

A cross-platform **Personal Health Tracker** built using **React Native and Expo Router**.  
The app allows users to manually log daily health activities such as **water intake, steps walked, and sleep hours**, and view summaries and history.

---

##  Features

###  Core Features

#### Welcome / Onboarding Screen
- App introduction
- “Get Started” button

#### Dashboard
- Displays today’s date
- Summary cards for:
  -  Water intake (glasses/day)
  -  Steps walked
  -  Sleep hours

#### Activity Logging
- Manually log activities:
  - Activity type (`water`, `steps`, `sleep`)
  - Value (number)
  - Optional notes
  - Time of logging (automatic)

#### History
- View logged activities
- Pull-to-refresh functionality
- Shows latest activities first

#### Cross-Platform Support
- Runs on **Web**, **Android**, and **iOS**
- Uses platform-based storage:
  - Web → `localStorage`
  - Mobile → `AsyncStorage`

---

##  Tech Stack

- React Native
- Expo
- Expo Router (File-based Routing)
- TypeScript
- Expo Tabs Navigation
- LocalStorage / AsyncStorage

---

##  Project Structure

