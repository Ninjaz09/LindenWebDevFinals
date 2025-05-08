// Song data (lyrics and video paths)
const songs = {
    'great-god': {
        lyrics: `
Great are your ways
Great are your works
Great are you Lord in all the earth
Great is your power
Great is your strength
Great are you Lord and your greatly to be praise
Great are your ways
Great are your works
Great are you Lord in all the earth
Great is your power
Great is your strength
Great are you Lord and your greatly to be praise
Your greatness
Your famous name is exhalted in all the earth
Glory glory hallelujah
Glory to the God of Israel
Glory glory hallelujah
And all the earth will sing
That you're a great God
Great are your ways
Great are your works
Great are you Lord in all the earth
Great is your power
Great is your strength
Great are you Lord and your greatly to be praise
Your greatness
Your famous name is exhalted in all the earth
Glory glory hallelujah
Glory to the God of Israel
Glory glory hallelujah
And all the earth will sing
That you're a great God
we won't stop till the whole world knows
we won't stop till the whole world knows
we won't stop till the whole world knows
that you're a great God, great God (5×)
Glory glory hallelujah
Glory to the God of Israel
Glory glory hallelujah
And all the earth will sing
That you're a great God (2×)`,
        video: 'Music/great-god.mp4'
    },
    'heres-my-life': {
        lyrics: `
Create in me
A heart that is clean
'Cause I want to be
Who You want me to be
The depths of my soul
Are Yours, Lord, to mould
'Cause I want to be
Who You want me to be
Holy Spirit fill me
Overwhelm me
Holy Spirit use me
For Your glory
Here's my life
Let it be a living sacrifice
All that I am
Surrender into Your hands
I surrender
No matter where
And no matter when
Lord, I will go
Where You want me to go
And Holy Spirit fill me, oh
Overwhelm me
And Holy Spirit use me, oh
For Your glory
Here's my life
Let it be a living sacrifice
All that I am
Surrender into Your hands
I surrender
Here I am
Jesus, let Your will be done in me
All that I am
Surrender into Your hands
I surrender
I give it all
My heart and soul
Jesus, I'm living for You
You have it all
My heart and soul
Jesus, I'm living for You
I give it all
My heart and soul
Jesus, I'm living for You
You have it all
My heart and soul
Jesus, I'm living for You
Here's my life
Let it be a living sacrifice
All that I am
Surrender into Your hands
I surrender
Here I am
Jesus, let Your will be done in me
All that I am
Surrender into Your hands
I surrender (I give it all)
I give it all
My heart and soul
Jesus, I'm living for You
You have it all
My heart and soul
Jesus, I'm living for You
I give it all
My heart and soul
Jesus, I'm living for You
You have it all
My heart and soul
Jesus, I'm living for You
Jesus, I'm living for You
Jesus, I'm living for You
Jesus, I'm living for You
Jesus, I'm living for You, God`,
        video: 'Music/heres-my-life.mp4'
    },
    'eagle-wings': {
        lyrics: `
Here I am waiting, abide in me, I pray
Here I am longing for You
Hide me in Your love, bring me to my knees
May I know Jesus more and more
Come live in me all my life, take over
Come breathe in me, I will rise on eagle's wings
Come live in me all my life, take over
Come breathe in me, I will rise on eagle's wings
Here I am waiting, abide in me, I pray
Here I am longing for You
Hide me in Your love, bring me to my knees
May I know Jesus more and more
Come live in me all my life, take over
Come breathe in me, I will rise on eagle's wings
Come live in me all my life, take over
Come breathe in me, I will rise on eagle's wings
Come live in me all my life, take over
Come breathe in me, I will rise on eagle's wings
I will rise on eagle's wings, I will rise on eagle's wings
I will rise on eagle's wings, I will rise on eagle's wings
I will rise on eagle's wings, I will rise on eagle's wings
On eagle's wings`,
        video: 'Music/eagle-wings.mp4'
    },
    'carry-me': {
        lyrics: `
You lead me in to Your courts
Surround me with Your love
I walk with You, I do not fear
In this place
Dreams are made
In this place
Where You are
Carry me here in Your arms of love
Draw me close to You
I wanna be where You are
You carry me
You are my strength
I've learned to trust in You
And once again I'm reaching out
In this place
Dreams are made
In this place
Where You aree`,
        video: 'Music/carry-me.mp4'
    },
    'good-grace': { // New song added
        lyrics: `
People come together
Strange as neighbours
Our blood is one
Children of generations
Of every nation
Of kingdom come
Don't let your heart be troubled
Hold your head up high
Don't fear no evil
Fix your eyes on this one truth
God is madly in love with you
So take courage
Hold on
Be strong
Remember where our help comes from
Oh-oh
Oh-oh-oh
Oh-oh
Oh-oh, oh-oh, oh-oh
Jesus
Our redemption
Our salvation
Is in His blood (Hey)
Jesus
Light of heaven
Friend forever
His kingdom come
And don't let your heart be troubled
Hold your head up high
Don't fear no evil
Fix your eyes on this one truth
God is madly in love with you
So take courage
Hold on
Be strong
Remember where our help comes from
Oh-oh
Oh-oh-oh
Oh-oh
Oh-oh, oh-oh, oh-oh
Swing wide
All you heavens
Let the praise go up as the walls come down
All creation
Everything with breath repeat the sound
All His children
Clean hands pure hearts
Good grace good God
His name is Jesus
Swing wide
All you heavens
Let the praise go up as the walls come down
All creation
Everything with breath repeat the sound
All His children
Clean hands pure hearts
Good grace good God
His name is Jesus
Swing wide
All you heavens
Let the praise go up as the walls come down
All creation
Everything with breath repeat the sound
All His children
Clean hands pure hearts
Good grace good God
His name is Jesus
Jesus
Our redemption
Our salvation
Is in His blood
Jesus
Light of heaven
Friend forever
His kingdom come`,
        video: 'Music/good-grace.mp4' // Make sure this file exists
    }
};

// Function to display lyrics and video
function showSong(songId) {
    const lyricsContainer = document.getElementById('lyrics-container');
    const videoContainer = document.getElementById('video-container');

    // Display lyrics
    lyricsContainer.innerHTML = `<pre>${songs[songId].lyrics}</pre>`;

    // Display video
    videoContainer.innerHTML = `
        <video controls id="song-video">
            <source src="${songs[songId].video}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;

    // Get the video element
    const videoElement = document.getElementById('song-video');

    // Ensure the video loads properly before playing
    videoElement.load();

    // Try playing the video automatically
    videoElement.play().catch(error => {
        console.warn('Autoplay prevented:', error);
    });

    // Allow user to click to play if autoplay is blocked
    videoElement.addEventListener('click', () => {
        videoElement.play().catch(error => {
            console.error('Video playback failed:', error);
            alert('Click the video to play.');
        });
    });
}
