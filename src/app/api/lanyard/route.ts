import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = 'https://api.lanyard.rest/v1/users/806285262459764776';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const filteredActivities = data.data.activities.filter((activity: any) => activity.name === 'Visual Studio Code');

    const formattedData = {
      listening_to_spotify: data.data.listening_to_spotify,
      user: {
        id: data.data.discord_user.id,
        username: data.data.discord_user.username,
        globalName: data.data.discord_user.global_name,
        avatar: `https://cdn.discordapp.com/avatars/${data.data.discord_user.id}/${data.data.discord_user.avatar}.png`,
        status: data.data.discord_status,
        activeOn: {
          web: data.data.active_on_discord_web,
          desktop: data.data.active_on_discord_desktop,
          mobile: data.data.active_on_discord_mobile,
        },
      },
      activities: filteredActivities.map((activity: any) => ({
        name: activity.name,
        type: activity.type,
        details: activity.details,
        state: activity.state,
        timestamps: activity.timestamps,
        assets: {
          largeImage: activity.assets?.large_image,
          largeText: activity.assets?.large_text,
          smallImage: activity.assets?.small_image,
          smallText: activity.assets?.small_text,
        },
      })),
      spotify: data.data.listening_to_spotify
        ? {
            song: data.data.spotify.song,
            artist: data.data.spotify.artist,
            album: data.data.spotify.album,
            albumArt: data.data.spotify.album_art_url,
            timestamps: data.data.spotify.timestamps,
          }
        : null,
    };

    return NextResponse.json(formattedData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}