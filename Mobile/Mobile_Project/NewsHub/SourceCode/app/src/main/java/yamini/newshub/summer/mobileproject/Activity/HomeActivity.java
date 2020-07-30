package yamini.newshub.summer.mobileproject.Activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.cardview.widget.CardView;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import yamini.newshub.summer.mobileproject.Activity.Animation.Dolphin;
import yamini.newshub.summer.mobileproject.R;

public class HomeActivity extends AppCompatActivity implements View.OnClickListener {

    private String business="business";
    private CardView buss,enter,health,science,sports,techno,technoo;
    private Button room;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);

        initializeViews();

        ClickListener();

    }

    private void ClickListener() {
        buss.setOnClickListener(this);
        enter.setOnClickListener(this);
        health.setOnClickListener(this);
        science.setOnClickListener(this);
        sports.setOnClickListener(this);
        techno.setOnClickListener(this);
        technoo.setOnClickListener(this);
        /*sql.setOnClickListener(this);*/
        room.setOnClickListener(this);
    }

    private void initializeViews() {
        buss=findViewById(R.id.business);
        enter=findViewById(R.id.entertainment);
        health=findViewById(R.id.health);
        science=findViewById(R.id.science);
        sports=findViewById(R.id.sports);
        techno=findViewById(R.id.techno);
        //technoo=findViewById(R.id.technoo);
        /*sql=findViewById(R.id.sql);*/
        //room=findViewById(R.id.bookmarks);
        room.setVisibility(View.VISIBLE);
    }

    @Override
    public void onClick(View v) {
        int id=v.getId();
        Intent intent=new Intent(HomeActivity.this, Dolphin.class);
        switch (id)
        {
            case (R.id.business):
                intent.putExtra("news",business);
                startActivity(intent);
                break;

            case R.id.entertainment:
                intent.putExtra("news","entertainment");
                startActivity(intent);
                break;

            case R.id.health:
                intent.putExtra("news","health");
                startActivity(intent);
                break;

            case R.id.science:
                intent.putExtra("news","science");
                startActivity(intent);
                break;

            case R.id.sports:
                intent.putExtra("news","sports");
                startActivity(intent);
                break;

            case R.id.techno:
                intent.putExtra("news","technology");
                startActivity(intent);
                break;


            /*case R.id.sql:
                //startActivity(new Intent(getApplicationContext(),SqlDatabase.class));
                break;*/

           /* case R.id.bookmarks:
                startActivity(new Intent(getApplicationContext(),RoomData.class));
                break;*/
        }
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finishAffinity();
        finish();
    }
}
