export const logout = (req, res) => {
    // Clear the access token and refresh token cookies
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
    res.json({ message: 'Logged out successfully' });
};
