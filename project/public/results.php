<!DOCTYPE html>
<html>
    <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Results Page</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" type="text/css" href="style.css" media="screen">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"> -->

    </head>
    <body>

        <div class="back-home">
            <a href="index.html" class="previous">&#8249; Enter New Search</a>
        </div>

        <div class="header-text">
            <header>
                <p>RESULTS</p>
            </header>
        </div>

        <div class="container">
            
            <div class="results-amazon"> 
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1">Amazon:</label><br>
            </div>

            <div class="amazontable" style="overflow-x:auto;">
                <table>
                    <thead>
                        <tr>
                            <th>DESCRIPTION</th>
                            <th>PRICE</th>
                            <th>RATING</th>
                            <th>URL</th>
                        </tr>
                    </thead>

                    <tbody>
                        <?php         
                        // connect to mysql
                        $connect = mysqli_connect("host", "user", "password", "database");
                        
                        //read all row from database table
                        $sql = "SELECT * FROM product";
                        $result = $connect->query($sql);

                        //check error
                        if($connect->connect_error) {
                            die("Connection failed: " . $connection->connect_error);
                        }

                        if($result->num_rows > 0){
                            while($row = $result->fetch_assoc())
                            {
                                echo "<tr>
                                    <td>" . $row["id"] . "</td>
                                    <td>" . $row["title"] . "</td>
                                    <td>" . $row["price"] . "</td>
                                    <td>
                                        <a href=" . $row["webURL"] . ">Click here!</a>
                                    </td>
                                </tr>";
                            }
                        }
                        else{
                            echo "0 result";
                        }

                        $connect->close();
                        ?>
                        <!-- <tr>
                            <td>Nike size 11</td>
                            <td>85</td>
                            <td>3.9</td>
                            <th><a href="https://www.amazon.com/ref=nav_logo">Click here!</a></th>
                        </tr> -->
                    </tbody>
                </table>
            </div>

            <div class="downloadamazon">
                <button class="btn"><i class="fa fa-download"></i> Download.CSV</button>
            </div>
            
            <div class="results-target"> 
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1">Target:</label><br>
            </div>

            <div class="targettable" style="overflow-x:auto;">
                <table>
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                    <th>RATING</th>
                    <th>URL</th>
                </tr>
                <tr>
                  <td>Nike size 11</td>
                  <td>79</td>
                  <td>4.3</td>
                  <th><a href="https://www.amazon.com/ref=nav_logo">Click here!</a></th>
                </tr>
                <tr>
                  <td>Nike size 11</td>
                  <td>83</td>
                  <td>3.9</td>
                  <th><a href="https://www.amazon.com/ref=nav_logo">Click here!</a></th>
                </table>
            </div>

            <div class="downloadtarget">
                <button class="btn"><i class="fa fa-download"></i> Download.CSV</button>
            </div>

            <div class="results-walmart"> 
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1">Walmart:</label><br>
            </div>

            <div class="walmarttable" style="overflow-x:auto;">
                <table>
                  <tr>
                    <th>DESCRIPTION</th>
                    <th>PRICE</th>
                    <th>RATING</th>
                    <th>URL</th>
                </tr>
                <tr>
                  <td>Nike size 11</td>
                  <td>75</td>
                  <td>4.4</td>
                  <th><a href="https://www.amazon.com/ref=nav_logo">Click here!</a></th>
                </tr>
                <tr>
                  <td>Nike size 11</td>
                  <td>78</td>
                  <td>4.1</td>
                  <th><a href="https://www.amazon.com/ref=nav_logo">Click here!</a></th>
                </table>
            </div>

            <div class="downloadwalmart">
                <button class="btn"><i class="fa fa-download"></i> Download.CSV</button>
            </div>

            <div class="results-all"> 
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <label for="vehicle1">Select All</label><br>
            </div>

            <div class="results-save">
                <a href="summary.html" class="savetoaccount">SAVE</a>
            </div>

        </div>


    </body>
</html>