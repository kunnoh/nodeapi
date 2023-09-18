const auth = async (req, res, next) => {
    let token;
    try {
        const authHdr = req['authorization'];
        token = authHdr ? authHdr.split['Bearer '][1] : null;            
    } catch (err) {
        console.log(err);
        res.status(403).json({
            status: 'fail',
            message: 'You are unauthorized to access the resource'
        });
        return;
    }
    console.log(token);

    try {
        // verify token
        next();
    } catch (err) {
        console.log(err)
        res.status(403).json({
            status: 'fail',
            message: 'You are unauthorized to access the resource'
        });
        return;
    }
}