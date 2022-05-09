from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

from controller.user import UserController

#

# Activate App
app = Flask(__name__)
# Apply CORS
CORS(app)


@app.route('/home/login/<string:email>/<string:password>')
def user_login(email, password):
    if request.method == 'GET':
        return UserController().user_login(email, password)

@app.route('/instinct-studio/users', methods=['GET','POST'])
def getAllUsers():
    if request.method == 'GET':
        return UserController().getAllUsers()
    elif request.method == 'POST':
        return UserController().registerNewUsers(request.json)
    else:
        if not request.args:
            return UserController().getAllUsers()

if __name__ == '__main__':
    # app.run(debug=1)
    app.run()
