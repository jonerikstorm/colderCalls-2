package main

import (
	"fmt"
	"log"
	"net/http"
)

func Server(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "It works with go.")
}
func main() {
	serverHandler := http.HandlerFunc(Server)
	go http.Handle("/", serverHandler)
	log.Fatal(http.ListenAndServe(":8090", nil))
}
