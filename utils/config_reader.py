import configparser
import os


class ConfigReader:
    """Read configuration from config.ini file"""
    
    def __init__(self):
        self.config = configparser.ConfigParser()
        config_path = os.path.join(os.path.dirname(__file__), '..', 'config', 'config.ini')
        self.config.read(config_path)
    
    def get_base_url(self):
        return self.config.get('TEST_ENV', 'base_url')
    
    def get_browser(self):
        return self.config.get('TEST_ENV', 'browser')
    
    def get_implicit_wait(self):
        return int(self.config.get('TEST_ENV', 'implicit_wait'))
    
    def get_explicit_wait(self):
        return int(self.config.get('TEST_ENV', 'explicit_wait'))
    
    def get_valid_username(self):
        return self.config.get('CREDENTIALS', 'valid_username')
    
    def get_valid_password(self):
        return self.config.get('CREDENTIALS', 'valid_password')
