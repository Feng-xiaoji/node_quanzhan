/**
 * @api {get} /user/:id GetUserInfo
 * @apiName Getuser
 * @apiGroup User
 * 
 * @apiParam {Number} id 用户唯一ID
 * 
 * @apiSuccess {String} firstname 姓氏
 * @apiSuccess {String} lastname 名字.
 * 
 * @apiSUccessExample Success-Response:
 *      HTTP/1.1 200 OK
 *      {
 *        "firstname":"John",
 *        "lastname":"Doe"
 *      }
 * 
 * @apiError UserNotFound 对应id用户未找到
 * 
 * @apiErrorExample Error-Response:
 *      HTTP/1.1  404 Not Found
 *      {
 *        "error":"UserNotFound"
 *      }
 */