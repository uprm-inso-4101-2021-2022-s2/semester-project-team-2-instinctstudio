from RumBoardProject.src.backend.config.dbconfig import pg_config
import psycopg2


class UsersDAO:

    def __init__(self):
        connection_url="dbname=%s user=%s password=%s port=%s host=%s" % (pg_config['database'], pg_config['user'],
                                                                          pg_config['password'], pg_config['port'],
                                                                          pg_config['host'])
        self.conn = psycopg2.connect(connection_url)

    def login(self, email, password):
        cursor = self.conn.cursor()
        query = "SELECT * FROM users where email = %s AND password = %s;"
        cursor.execute(query, (email, password,))
        result = cursor.fetchone()
        return result

    def getAllUsers(self):
        cursor = self.conn.cursor()
        query = "SELECT * FROM users;"
        cursor.execute(query)
        result = []
        for row in cursor:
            result.append(row)
        return result

    def insertUsers(self,first_name,last_name,email,password,admin):
        cursor = self.conn.cursor()
        query = "INSERT INTO users(first_name,last_name,email,password,admin) values (%s,%s,%s,%s,%s) returning id;"
        cursor.execute(query, (first_name,last_name,email,password,admin,))
        users_id = cursor.fetchone()[0]
        self.conn.commit()
        return users_id

    def validateAdminRights(self, id):
        cursor = self.conn.cursor()
        query = "SELECT * FROM users where id = %s AND admin = true;"
        cursor.execute(query, (id,))
        result = cursor.fetchone()
        return result



