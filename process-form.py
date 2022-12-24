import cgi
form = cgi.FieldStorage()

name = form.getvalue('name')
email = form.getvalue('email')
project = form.getvalue('project')
message = form.getvalue('message')

formData = "Name: {}\nEmail: {}\nProject: {}\nMessage: {}\n\n".format(name, email, project, message)

with open('form-data.txt', 'a') as file:
    file.write(formData)

