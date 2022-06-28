import ConferenceParticipant from './types/ConferenceParticipant';
import Participant from './types/Participant';
import MediaStream from './types/MediaStream';
import { CreateOptions } from './types/CreateConference';
import { JoinOptions } from './types/JoinConference';
import { Conference } from './types';
export interface RefreshCallback {
    (): void;
}
export interface TokenRefreshCallback {
    (): Promise<string>;
}
declare class RNVoxeetSDK {
    #private;
    get events(): any;
    set events(any: any);
    refreshAccessTokenCallback: RefreshCallback | null;
    /**
     * Initializes the SDK using the customer key and secret.
     * @param consumerKey Consumer Key
     * @param consumerSecret Consumer Secret
     * @param appGroup appGroup for iOS Screenshare (optional)
     * @param preferredExtension preferredExtension for iOS Screenshare extension bundle id (optional)
     * @param deactivateOverlay Optional value to deactivate the whole overlay if the react native will take care of displaying specific UI
     */
    initialize(consumerKey: string, consumerSecret: string, appGroup?: string, preferredExtension?: string, deactivateOverlay?: boolean): Promise<boolean>;
    /**
     * Initializes the SDK with an access token that is provided by the customer backend communicating with Voxeet servers.
     * @param accessToken Access token
     * @param refreshToken Callback to get a new access token after it expires
     * @param appGroup appGroup for iOS Screenshare (optional) put null if you don't want to use it
     * @param preferredExtension preferredExtension for iOS Screenshare extension bundle id (optional) put null
     * @param deactivateOverlay Optional value to deactivate the whole overlay if the react native will take care of displaying specific UI
     */
    initializeToken(accessToken: string | undefined, refreshToken: TokenRefreshCallback, appGroup?: string, preferredExtension?: string, deactivateOverlay?: boolean): Promise<boolean>;
    /**
     * Opens a new session.
     * @param userInfo Participant information
     */
    connect(userInfo: ConferenceParticipant): Promise<boolean>;
    /**
     * Closes the current session.
     */
    disconnect(): Promise<boolean>;
    /**
     * Closes the current session.
     */
    release(): Promise<boolean>;
    /**
     * Creates a conference.
     * @param options Options to use to create the conference
     */
    create(options: CreateOptions): Promise<Conference>;
    /**
     * Joins the conference.
     * @param conferenceId Id of the conference to join
     * @param options Options to use to join the conference
     */
    join(conferenceId: string, options?: JoinOptions): Promise<Conference>;
    /**
     * Gets the current conference or undefined if none is live.
     */
    current(): Promise<Conference | undefined>;
    /**
     * Leaves the conference.
     */
    leave(): Promise<boolean>;
    /**
     * Starts the local video
     */
    startVideo(): Promise<boolean>;
    /**
     * Starts the recording video
     */
    startRecording(): Promise<boolean>;
    /**
     * Starts the recording video
     */
    stopRecording(): Promise<boolean>;
    /**
     * Stops the local video
     */
    stopVideo(): Promise<boolean>;
    /**
     * Start screen sharing
    */
    startScreenSharing(): Promise<boolean>;
    /**
     * Stop screen sharing
    */
    stopScreenSharing(): Promise<boolean>;
    /**
     * Invite a participant to the conference.
     * @param conferenceId Id of the conference to invite the participant to
     * @param participants List of participants to invite
     */
    invite(conferenceId: string, participants: ConferenceParticipant[]): Promise<boolean>;
    /**
     * Get the list of participants
     * @param conferenceId Id of the conference to get the participants from
     * @returns List of participants in the conference
     */
    participants(conferenceId: string): Promise<Participant[]>;
    /**
   * Get the Conference
   * @param conferenceId Id of the conference to get the Conference
   * @returns Conference by id
   */
    fetch(conferenceId: string): Promise<Conference>;
    /**
     * Get the Boolean value of status
     * @param participantId Id of the participant to get the status
     * @returns status of speaker
     */
    isSpeaking(participantId: string): Promise<any>;
    /**
     * Get the list of streams for a given participant
     * @param participantId Id of the participant to get the streams from
     * @returns List of streams for this participant
     */
    streams(participantId: string): Promise<MediaStream[]>;
    /**
     * Sends a broadcast message to the participants of the conference.
     * @param message Message to send to the other participants
     */
    sendBroadcastMessage(message: string): Promise<boolean>;
    /**
     * Is telecom mode enabled.
     */
    isTelecomMode(): Promise<boolean>;
    /**
     * Is audio 3D enabled.
     */
    isAudio3DEnabled(): Promise<boolean>;
    /**
     * Sets if you want the UXKit to appear maximized or not.
     * @param maximized True to have the UXKit to appear maximized
     */
    appearMaximized(maximized: boolean): boolean;
    /**
     * Use the built in speaker by default.
     * @param enable True to use the built in speaker by default
     */
    defaultBuiltInSpeaker(enable: boolean): boolean;
    /**
     * Sets the video on by default.
     * @param enable True to turn on the video by default
     */
    defaultVideo(enable: boolean): boolean;
    /**
     * Activates or disable the screen auto lock. Android only.
     * @param activate True to activate the screen auto lock
     */
    screenAutoLock(activate: boolean): void;
    /** @deprecated */
    isUserLoggedIn(): Promise<boolean>;
    /**
     * Checks if a conference is awaiting. Android only.
     * @deprecated
     */
    checkForAwaitingConference(): Promise<boolean>;
    /** @deprecated Use join() instead. */
    startConference(conferenceId: string, participants: Array<ConferenceParticipant>): Promise<boolean>;
    /** @deprecated Use leave() instead. */
    stopConference(): Promise<boolean>;
    /** @deprecated Use connect() instead. */
    openSession(userInfo: ConferenceParticipant): Promise<boolean>;
    /** @deprecated Use disconnect() instead. */
    closeSession(): Promise<boolean>;
    static VoxeetSDK: RNVoxeetSDK;
}
declare const _default: RNVoxeetSDK;
export default _default;
