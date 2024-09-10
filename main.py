from flask import Flask, jsonify, request
import summery as s

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/sumAavg/<int:a>')
def sumAavg(a):

    result = {
        "Sum":a+a,
        "Average":(a+a)/2,
        "success":200,
    }
    return jsonify(result)

@app.route('/arg') # http://127.0.0.1:5000/arg?a=30&b=98
def sum():
    a=int(request.args.get('a'))
    b=int(request.args.get('b'))
    result={
        "sum":a+b,
        "Avg":(a+b)/2,
        "success":200,
    }
    return result

@app.route('/summary')
def summary():
    result={
        "Summary":s.summery()
        }
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)