import java.util.*;

public class User {
    private String username;
    private String name;
    private ArrayList<String> favoriteBooks; // list of book ids

    public User(String username, String name, ArrayList<String> favoriteBooks) {
        this.username = username;
        this.name = name;
        this.favoriteBooks = favoriteBooks;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ArrayList<String> getFavoriteBooks() {
        return favoriteBooks;
    }

    public void setFavoriteBooks(ArrayList<String> favoriteBooks) {
        this.favoriteBooks = favoriteBooks;
    }
}