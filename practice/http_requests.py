import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

#sending recipient queue
channel.queue_declare(queue='Hello')

#exchange
channel.basic_publish(exchange='',
                    routing_key='Hello',
                    body='A message from CS361')
print(" [x] Sent 'A message from CS361'")


connection.close()


