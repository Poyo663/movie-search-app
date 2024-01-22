from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait

class Test:
    def __init__(self):
        self.driver = webdriver.Firefox()
        self.driver.get("http://localhost:3000/search.html")

    def error(self, message):
        raise Exception(message)

    def success(self):
        print("all tests ran successfully")

    def startTest(self):
        inputElement = self.driver.find_element(By.XPATH, '//*[@id="input"]')
        buttonElement = self.driver.find_element(By.XPATH, '//*[@id="button"]')

        inputElement.click()
        inputElement.send_keys("transformers")

        buttonElement.click()

        WebDriverWait(self.driver, 3)

        movie = self.driver.find_element(By.XPATH, "/html/body/div[2]/a[1]/img")
        ActionChains(self.driver).move_to_element(movie).click().perform()

        self.driver.quit()

        self.success()


test = Test()
test.startTest()
