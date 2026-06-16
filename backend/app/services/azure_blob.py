from azure.storage.blob import BlobServiceClient
import json

CONNECTION_STRING = "AZURE_STORAGE_CONNECTION_STRING"

CONTAINER_NAME = "bloodconnect-data"

blob_service_client = BlobServiceClient.from_connection_string(
    CONNECTION_STRING
)


def upload_backup(data):

    blob_client = blob_service_client.get_blob_client(
        container=CONTAINER_NAME,
        blob="backup.json"
    )

    blob_client.upload_blob(
        json.dumps(data),
        overwrite=True
    )

    return blob_client.url