from flask import jsonify

from RumBoardProject.src.backend.model.user import UsersDAO


class UserController:
    def build_users_dict(self, row):
        result = {'id': row[0], 'first_name': row[1], 'last_name': row[2], 'email': row[3], 'password': row[4], 'admin': row[5]}
        return result

    def get_all_user(self):
        dao = UsersDAO()
        users_list = dao.getAllUsers()
        result_list = []
        for row in users_list:
            result = self.build_users_dict(row)
            result_list.append(result)
        return jsonify(Users=result_list)

    def user_login(self, email, password):
        dao = UsersDAO()
        user = dao.login(email, password)
        if user:
            result = self.build_users_dict(user)
            return jsonify(User=result)
        else:
            return jsonify('USER DOES NOT EXIST'), 500

    def register_new_users(self, json):
        try:
            first_name = json['first_name']
            last_name = json['last_name']
            email = json['email']
            password = json['password']
            admin = "false"
            dao = UsersDAO()
            users_id = dao.insertUsers(first_name,last_name,email,password, admin)
            if users_id:
                user_tuple = (users_id, first_name, last_name, email, password, admin,)
                result = self.build_users_dict(user_tuple)
                return jsonify(Users=result), 200
            else:
                return jsonify('UNABLE TO CREATE USER'), 500
        except Exception:
            return jsonify('USER ALREADY EXISTS!'),500





