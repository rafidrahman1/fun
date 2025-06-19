# বেতনের দাবিতে আন্দোলন - Salary Protest Animation

A dynamic, interactive web application that simulates a salary protest scene with animated characters and dialogues in Bengali.

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── dialogues.js        # Dialogue data and dialogue-related functions
├── script.js           # Main JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Features

### Visual Elements
- **Animated Characters**: 7 unique characters with distinct personalities
- **Dynamic Animations**: Breathing, protest, hover, and interaction animations
- **Visual Effects**: Sparkles, particles, and character highlighting
- **Responsive Design**: Works on desktop and mobile devices

### Interactive Features
- **Character Click**: Click on any character to hear their dialogue
- **Multiple Scenes**: 
  - Complete story sequence
  - Group protest scene
  - Random dialogue mode
- **Sound Effects**: Background audio for protest scenes
- **Visual Feedback**: Characters highlight when speaking

### Dialogue System
- **Rich Conversations**: Each character has 10 unique dialogues
- **Character Personalities**:
  - **Jesan & Sakib**: Angry, demanding characters
  - **Rafid & Tanvir**: Calming, mediating characters  
  - **Imran, Nahiyan & Mohona**: Protest slogans
- **Sequenced Story**: 24 dialogue exchanges in 4 phases

## 🎮 Controls

### Buttons
1. **সম্পূর্ণ দৃশ্য চালাও** (Play Full Scene): Runs the complete story sequence
2. **সমবেত আন্দোলন** (Group Protest): Activates the protest scene
3. **র‍্যান্ডম কথোপকথন** (Random Dialogue): Random character conversations
4. **রিসেট** (Reset): Resets the scene to initial state

### Character Interaction
- Click on any character to hear their dialogue
- Characters respond with facial expressions
- Speech bubbles appear with character dialogue

## 🎭 Characters

| Character | Color | Personality | Role |
|-----------|-------|-------------|------|
| জেসান (Jesan) | Green | Angry, demanding | Main protester |
| সাকিব (Sakib) | Blue | Angry, demanding | Main protester |
| রাফিদ (Rafid) | Red | Calming, mediating | Mediator |
| তানভির (Tanvir) | Purple | Calming, mediating | Mediator |
| ইমরান (Imran) | Gold | Protest slogans | Supporter |
| নাহিয়ান (Nahiyan) | Teal | Protest slogans | Supporter |
| মোহনা (Mohona) | Pink | Protest slogans | Supporter |

## 🎬 Animation Types

### Character Animations
- **Breathe**: Subtle breathing motion
- **Protest**: Dynamic protest movement
- **Hover**: Interactive hover effects
- **Speaking**: Character highlighting when talking
- **Angry**: Facial expression changes

### Visual Effects
- **Sparkles**: Ambient sparkle effects
- **Particles**: Floating particle animations
- **Speech Bubbles**: Pop-in animation
- **Character Highlighting**: Brightness and glow effects

## 🛠️ Technical Details

### CSS Features
- CSS Grid and Flexbox for layout
- CSS Animations and Transitions
- Responsive design with media queries
- Custom keyframe animations
- Gradient backgrounds and effects

### JavaScript Features
- Modular code structure
- Event-driven interactions
- Dynamic dialogue system
- Audio integration
- Scene management

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interactions

## 🚀 Getting Started

1. **Download** all files to a local directory
2. **Open** `index.html` in a web browser
3. **Interact** with the characters and buttons
4. **Enjoy** the animated protest scene!

## 📱 Mobile Support

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Touch devices

## 🎵 Audio Features

- Background crowd sounds during protests
- Cheering sounds for dramatic effect
- Audio automatically plays during protest scenes

## 🔧 Customization

### Adding New Dialogues
Edit `dialogues.js` to add new dialogues for characters:

```javascript
jesan: [
    'Your new dialogue here',
    // ... existing dialogues
]
```

### Modifying Animations
Edit `styles.css` to customize animations:

```css
@keyframes yourAnimation {
    /* Your animation keyframes */
}
```

### Changing Character Colors
Modify character colors in `styles.css`:

```css
.jesan .character-body { 
    background: linear-gradient(45deg, #YOUR_COLOR1, #YOUR_COLOR2); 
}
```

## 📄 License

This project is open source and available for educational and personal use.

## 🤝 Contributing

Feel free to contribute by:
- Adding new dialogues
- Improving animations
- Enhancing the user interface
- Adding new features

---

**Enjoy the animated protest scene!** 🎭✨ 