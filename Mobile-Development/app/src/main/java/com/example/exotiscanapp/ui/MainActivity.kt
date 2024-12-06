package com.example.exotiscanapp.ui

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.navigation.NavController
import androidx.navigation.fragment.NavHostFragment
import androidx.navigation.ui.NavigationUI
import com.example.exotiscanapp.R
import com.example.exotiscanapp.databinding.ActivityMainBinding
import com.example.exotiscanapp.ui.history.HistoryScreenFragment
import com.example.exotiscanapp.ui.home.HomeScreenFragment
import com.example.exotiscanapp.ui.profile.ProfileScreenFragment
import com.example.exotiscanapp.ui.quiz.QuizScreenFragment
import com.google.android.material.bottomnavigation.BottomNavigationView

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)
        val homeScreen = HomeScreenFragment()
        val historyScreen = HistoryScreenFragment()
        val quizScreen = QuizScreenFragment()
        val profileScreen = ProfileScreenFragment()

        makeCarrentFragment(homeScreen)

        binding.bottomNavigation.setOnItemSelectedListener { item ->
            when(item.itemId){
                R.id.nav_home -> makeCarrentFragment(homeScreen)
                R.id.nav_history -> makeCarrentFragment(historyScreen)
                R.id.nav_quiz -> makeCarrentFragment(quizScreen)
                R.id.nav_profile -> makeCarrentFragment(profileScreen)
            }
            true
        }
        supportActionBar?.hide()
    }
    private fun makeCarrentFragment(fragment: Fragment) =
        supportFragmentManager.beginTransaction().apply {
            replace(R.id.frame_dashboard, fragment)
            commit()

        }

}