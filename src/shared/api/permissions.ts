import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

export const setUserPermissionLevel = functions.https.onCall(async (data, context) => {
    // 보안 체크: 요청을 보낸 사용자가 최고 권한(레벨 3)을 가지고 있는지 확인
    if (!(context.auth && context.auth.token.permissionLevel === 3)) {
        throw new functions.https.HttpsError(
            'permission-denied',
            'Only highest level admins can modify permission levels.',
        );
    }

    const { uid, level } = data;
    if (!uid || !Number.isInteger(level) || level < 0 || level > 3) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Invalid uid or permission level.',
        );
    }

    try {
        await admin.auth().setCustomUserClaims(uid, { permissionLevel: level });
        return { result: `Successfully set permission level ${level} for user ${uid}` };
    } catch (error) {
        throw new functions.https.HttpsError('internal', error.message);
    }
});
