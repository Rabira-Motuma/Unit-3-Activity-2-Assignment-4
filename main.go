/*
 * Author: Rabira Motuma
 * Version: 1.0.0
 * Date: 2025-11-27
 * Fileoverview: This program calculates the minimum amount of coins used to give change.
 */

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
  // constants
	const interest float64 = 0.07

	// variables
	var initialValueAsString string
  var initialValueAsNumber float64
  var yr1InterestGained float64
  var yr2InterestGained float64
  var yr3InterestGained float64
  var yr4InterestGained float64
  var yr5InterestGained float64
  var yr6InterestGained float64
  var yr7InterestGained float64
  var yr8InterestGained float64
  var yr9InterestGained float64
  var yr10InterestGained float64
  var yr1CurrentValue float64
  var yr2CurrentValue float64
  var yr3CurrentValue float64
  var yr4CurrentValue float64
  var yr5CurrentValue float64
  var yr6CurrentValue float64
  var yr7CurrentValue float64
  var yr8CurrentValue float64
  var yr9CurrentValue float64
  var yr10CurrentValue float64

	reader := bufio.NewReader(os.Stdin)

	// input
	fmt.Printf("What is the initial value? ")
	initialValueAsString, _ = reader.ReadString('\n')
	initialValueAsString = strings.TrimSpace(initialValueAsString)

	// process
	initialValueAsNumber, _ = strconv.ParseFloat(initialValueAsString, 64)
	yr1InterestGained = (initialValueAsNumber * interest)
  yr1CurrentValue = (initialValueAsNumber + yr1InterestGained)
  yr2InterestGained = (yr1CurrentValue * interest)
  yr2CurrentValue = (yr1CurrentValue + yr2InterestGained)
  yr3InterestGained = (yr2CurrentValue * interest)
  yr3CurrentValue = (yr2CurrentValue + yr3InterestGained)
  yr4InterestGained = (yr3CurrentValue * interest)
  yr4CurrentValue = ( yr3CurrentValue + yr4InterestGained)
  yr5InterestGained = (yr4CurrentValue * interest)
  yr5CurrentValue = (yr4CurrentValue + yr5InterestGained)
  yr6InterestGained = (yr5CurrentValue * interest)
  yr6CurrentValue = (yr5CurrentValue + yr6InterestGained)
  yr7InterestGained = (yr6CurrentValue * interest)
  yr7CurrentValue = (yr6CurrentValue + yr7InterestGained)
  yr8InterestGained = (yr7CurrentValue * interest)
  yr8CurrentValue = (yr7CurrentValue + yr8InterestGained)
  yr9InterestGained = (yr8CurrentValue * interest)
  yr9CurrentValue = (yr8CurrentValue + yr9InterestGained)
  yr10InterestGained = (yr9CurrentValue * interest)
  yr10CurrentValue = (yr9CurrentValue + yr10InterestGained)
	
	// outputs
	fmt.Println()
	fmt.Printf("%-10s %10s %20s %20s\n", "Year", "Initial Value", "Interest Gained", "Current Value")
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "1", initialValueAsNumber, yr1InterestGained, yr1CurrentValue)
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "2", initialValueAsNumber, yr2InterestGained, yr2CurrentValue)
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "3", initialValueAsNumber, yr3InterestGained, yr3CurrentValue)
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "4", initialValueAsNumber, yr4InterestGained, yr4CurrentValue)
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "5", initialValueAsNumber, yr5InterestGained, yr5CurrentValue)
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "6", initialValueAsNumber, yr6InterestGained, yr6CurrentValue)
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "7", initialValueAsNumber, yr7InterestGained, yr7CurrentValue)
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "8", initialValueAsNumber, yr8InterestGained, yr8CurrentValue)
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "9", initialValueAsNumber, yr9InterestGained, yr9CurrentValue)
	fmt.Printf("%-10s %10.0f %20.2f %20.2f\n", "10", initialValueAsNumber, yr10InterestGained, yr10CurrentValue)

	fmt.Println("\nDone.")
}
